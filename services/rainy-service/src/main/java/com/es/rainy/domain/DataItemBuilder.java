package com.es.rainy.domain;

import java.util.Arrays;

public class DataItemBuilder {

    private DataItem item = new DataItem();

    public DataItemBuilder(String anchor) {
        item.setAnchor(anchor);
    }

    public DataItemBuilder category(String category) {
        this.item.setCategory(category);
        return this;
    }

    public DataItemBuilder title(String title) {
        this.item.setTitle(title);
        return this;
    }

    public DataItemBuilder description(String description) {
        this.item.setDescription(description);
        return this;
    }

    public DataItemBuilder user(String user) {
        this.item.setUser(user);
        return this;
    }

    public DataItemBuilder email(String email) {
        this.item.setEmail(email);
        return this;
    }

    public DataItemBuilder password(String password) {
        this.item.setPassword(password);
        return this;
    }

    public DataItemBuilder hint(String hint) {
        this.item.setHint(hint);
        return this;
    }
    public DataItemBuilder meta(MetaItem... items) {
        this.item.setMeta(Arrays.asList(items));
        return this;
    }

    public DataItem build() {
        return this.item;
    }

}
