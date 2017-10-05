/**
 * PersonController
 *
 * @description :: Server-side logic for managing people
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	"new": function(req, res) {
        res.view(); 
    },
    create: function(req, res, next) {
        Person.create(req.params.all(), function personCreated(err, person) {
            if(err) return next(err);

            res.redirect('person/show/'+person.id);
        });
    },
    show: function(req, res, next) {
        Person.findOne(req.param('id'), function foundPerson(err, person) {
            if(err) return next(err);
            if(!person) return next();
            
            res.view({
                person: person
            });
        });
    },
    index: function(req, res, next) {
        Person.find( function foundPersons(err, persons) {
            if(err) return next(err);
            
            res.view({
                persons: persons
            });
        });
    },
    edit: function(req, res, next) {
        Person.findOne(req.param('id'), function foundPerson(err, person) {
            if(err) return next(err);
            if(!person) return next();
            
            res.view({
                person: person
            });
        });
    },
    update: function(req, res, next) {
        Person.update(req.param('id'), req.params.all(), function personUpdated(err) {
            if(err) {
                return res.redirect('person/edit/'+req.param('id'));
            }

            res.redirect('person/show/'+req.param('id'));
        });
    },
    destroy: function(req, res, next) {
        Person.destroy(req.param('id')).exec( function () {
            res.redirect('person');
        });
    },
};

