package com.tsuyo.java.tasklist;

import java.sql.Timestamp;
import java.util.List;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class TweetDao {
    private final JdbcTemplate jdbcTemplate;

    public TweetDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public void addTweet(String content) {
        String sql = "INSERT INTO tweets (content, dateTime) VALUES (?, ?)"; // dateTimeも追加
        jdbcTemplate.update(sql, content, new Timestamp(System.currentTimeMillis())); // 現在の日時を追加
    }

    public List<Tweet> getAllTweets() {
        String sql = "SELECT * FROM tweets ORDER BY dateTime DESC";
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            Tweet tweet = new Tweet();
            tweet.setId(rs.getInt("id"));
            tweet.setContent(rs.getString("content"));
            tweet.setDateTime(rs.getTimestamp("dateTime")); // TimestampのままでOK
            return tweet;
        });
    }

    public void deleteTweet(int id) {
        String sql = "DELETE FROM tweets WHERE id = ?";
        jdbcTemplate.update(sql, id);
    }
}
