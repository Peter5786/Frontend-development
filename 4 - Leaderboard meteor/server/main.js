import { Meteor } from 'meteor/meteor';

PilkarzeList = new Mongo.Collection("pilkarze");

PilkarzeList.allow({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});

Meteor.startup(() => {
    "use strict";
    PilkarzeList.remove({});
    if (PilkarzeList.find().count() === 0) {
        var names = ["David Beckham", "Ronaldinho", "Włodzimierz Lubański", "Zinedine Zidane", "Pele"];
        _.each(names, function(name) {
           PilkarzeList.insert({
               name: name,
               upScore: 0,
               downScore: 0,
           })
        });
    }
});