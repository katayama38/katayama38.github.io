package com.tsuyo.java.tasklist;

import java.sql.Timestamp;

public class Tweet {
    private int id; // IDをint型に変更
    private String content;
    private Timestamp dateTime;

    // GetterとSetter
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Timestamp getDateTime() {
        return dateTime;
    }

    public void setDateTime(Timestamp dateTime) {
        this.dateTime = dateTime;
    }
}
