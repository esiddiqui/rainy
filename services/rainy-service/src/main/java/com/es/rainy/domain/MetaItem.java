package com.es.rainy.domain;

public class MetaItem {


    public String key;
    public Object value;

    public MetaItem(String key, Object value) {
        this.key = key;
        this.value = value;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public Object getValue() {
        return value;
    }

    public void setValue(Object value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return "MetaItem{" +
                "key='" + key + '\'' +
                ", value=" + value +
                '}';
    }
}
