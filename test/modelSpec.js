/*global app, jasmine, describe, it, beforeEach, expect */

describe('model', function () {
	'use strict';

	var model , store;
 	var callback = function () { };

	beforeEach(function () {
        store = new app.Store('testProjet8');

        model = new app.Model(store);

	});


	describe('update', function () {

		it('update launch store.save', function () {

            spyOn(store,'save');
			model.update();
			expect(store.save).toHaveBeenCalled();
		});

    });


    describe('remove', function () {

        it('remove launch store.remove', function () {

            spyOn(store,'remove');
            model.remove();
            expect(store.remove).toHaveBeenCalled();
        });

    });

    describe('removeAll', function () {

        it('removeAll launch store.drop', function () {

            spyOn(store,'drop');
            model.removeAll();
            expect(store.drop).toHaveBeenCalled();
        });

    });


    describe('getCount', function () {

        it('getCount launch store.findAll', function () {

            spyOn(store,'findAll');
            model.getCount();
            expect(store.findAll).toHaveBeenCalled();
        });

    });



    describe('read', function () {

        it('read with function parameter launch store.findAll', function () {

            spyOn(store,'findAll');
            model.read(function(){});
            expect(store.findAll).toHaveBeenCalled();
        });


        it('read with number parameter launch store.find', function () {

            spyOn(store,'find');
            model.read(5);
            expect(store.find).toHaveBeenCalled();
        });

        it('read with string parameter launch store.find', function () {

            spyOn(store,'find');
            model.read('ABC');
            expect(store.find).toHaveBeenCalled();
        });



    });


    describe('create', function () {

        it('create launch store.save', function () {

            spyOn(store,'save');
            model.create();
            expect(store.save).toHaveBeenCalled();
        });

    });


});