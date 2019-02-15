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

		it('should launch store.save', function () {

            spyOn(store,'save');
			model.update();
			expect(store.save).toHaveBeenCalled();
		});

    });


    describe('remove', function () {

        it('should launch store.remove', function () {

            spyOn(store,'remove');
            model.remove();
            expect(store.remove).toHaveBeenCalled();
        });

    });

    describe('removeAll', function () {

        it('should launch store.drop', function () {

            spyOn(store,'drop');
            model.removeAll();
            expect(store.drop).toHaveBeenCalled();
        });

    });


    describe('getCount', function () {

        it('should launch store.findAll', function () {

            spyOn(store,'findAll');
            model.getCount();
            expect(store.findAll).toHaveBeenCalled();
        });

    });



    describe('read', function () {

        it('should with function parameter launch store.findAll', function () {

            spyOn(store,'findAll');
            model.read(function(){});
            expect(store.findAll).toHaveBeenCalled();
        });


        it('should with number parameter launch store.find', function () {

            spyOn(store,'find');
            model.read(5);
            expect(store.find).toHaveBeenCalled();
        });

        it('should with string parameter launch store.find', function () {

            spyOn(store,'find');
            model.read('ABC');
            expect(store.find).toHaveBeenCalled();
        });



    });


    describe('create', function () {

        it('should launch store.save', function () {

            spyOn(store,'save');
            model.create();
            expect(store.save).toHaveBeenCalled();
        });

    });


});