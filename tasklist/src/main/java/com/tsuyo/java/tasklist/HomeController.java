package com.tsuyo.java.tasklist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Controller
public class HomeController {

    record TaskItem(String id, String task, String deadline, boolean done) {}

    private final TaskListDao dao;
    private final TweetDao twdao;

    @Autowired
    HomeController(TaskListDao dao, TweetDao twdao) {
        this.dao = dao;
        this.twdao = twdao;
    }

    @GetMapping("/hello")
    @ResponseBody
    String hello() {
        return """
                <html>
                    <head><title>Hello</title></head>
                    <body>
                        <h1>Hello</h1>
                        It works!<br>
                        現在時刻は%sです。
                    </body>
                </html>
                """.formatted(LocalDateTime.now());
    }

    @GetMapping("/list")
    String listItems(Model model) {
        // タスクのリストを取得
        List<HomeRestController.TaskItem> taskList = dao.findAll();
        model.addAttribute("taskList", taskList);

        // ツイートのリストを取得
        List<Tweet> tweetList = twdao.getAllTweets();
        model.addAttribute("tweetList", tweetList);

        return "home"; // home.htmlが存在することを確認
    }

    @PostMapping("/add")
    String addItem(@RequestParam("task") String task,
                   @RequestParam("deadline") String deadline) {
        String id = UUID.randomUUID().toString().substring(0, 8);
        TaskItem item = new TaskItem(id, task, deadline, false);
        dao.add(item);
        return "redirect:/list"; // タスク追加後にタスクリストへリダイレクト
    }

    @PostMapping("/delete")
    String deleteItem(@RequestParam("id") String id) {
        dao.delete(id);
        return "redirect:/list"; // 削除後にタスクリストへリダイレクト
    }

    @PostMapping("/update")
    String updateItem(@RequestParam("id") String id,
                      @RequestParam("task") String task,
                      @RequestParam("deadline") String deadline,
                      @RequestParam("done") boolean done) {
        TaskItem taskItem = new TaskItem(id, task, deadline, done);
        dao.update(taskItem);
        return "redirect:/list"; // 更新後にタスクリストへリダイレクト
    }

    @PostMapping("/tweet")
    public String addTweet(@RequestParam("content") String content) {
        twdao.addTweet(content);
        return "redirect:/list"; // ツイート追加後にタスクリストへリダイレクト
    }
    @PostMapping("/deleteTweet")
    public String deleteTweet(@RequestParam("id") int id) {
        twdao.deleteTweet(id);
        return "redirect:/list";
    }
}
