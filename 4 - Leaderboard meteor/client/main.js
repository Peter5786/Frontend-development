import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

PilkarzeList = new Mongo.Collection("pilkarze");

Template.ranking.helpers({
    pobierzPilkarzy: function() {
        "use strict";
        return PilkarzeList.find({}, { sort: {upScore: -1, downScore: 1 }});
    },
});

Template.ranking.events({

});

Template.pilkarz.helpers({

});

Template.pilkarz.events({
    'click .lapka_w_gore': function() {
        "use strict";
        PilkarzeList.update(this._id, {$inc: {upScore: 1}});
    },

    'click .lapka_w_dol': function() {
        "use strict";
        PilkarzeList.update(this._id, {$inc: {downScore: 1}});
    },

    'click .usun': function() {
        "use strict";
        PilkarzeList.remove(this._id);
    }
});

Template.dodaj.helpers({

});

Template.dodaj.events({
   'submit .dodaj-pilkarza': function(event) {
       "use strict";
       event.preventDefault();

       const target = event.target;
       const name = target.name.value;

       PilkarzeList.insert({ name: name, upScore: 0, downScore: 0 });
       target.name.value = '';
   }
});

//table
