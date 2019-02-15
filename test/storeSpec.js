/*global app, jasmine, describe, it, beforeEach, expect */

describe('store', function () {
	'use strict';

	var store;
 	var callback = function () { };

	beforeEach(function () {
        store = new app.Store('testProjet8');

        var data = {  todos : [
         {
            id: 1,
            title: 'Todo One',
            completed: false
        },
         {
            id: 2,
            title: 'Todo two',
            completed: false
        }

    ] }
    localStorage['testProjet8'] = JSON.stringify(data)

	});


	describe('save without id', function () {

		it('should launch distinctId', function () {

            spyOn(store,'distinctId');

           var upload= {
                id: 3,
			    title: 'Todo three',
                completed: false
            }
			store.save(upload,callback);
			expect(store.distinctId).toHaveBeenCalled();
		});


        it('should lauch  randomId', function () {


            spyOn(store,'randomId');
            var upload= {
                id: 3,
                title: 'Todo three',
                completed: false
            }

            store.save(upload,callback);
           expect(store.randomId).toHaveBeenCalled();

        });


        it('should launch checkId', function () {

            spyOn(store,'checkId');

            var upload= {
                id: 3,
                title: 'Todo three',
                completed: false
            }

            store.save(upload,callback);

            expect(store.checkId).toHaveBeenCalled();
        });


        it('should launch distinctId randomId checkId', function () {

            spyOn(store,'distinctId').and.callThrough();
            spyOn(store,'checkId').and.callThrough();
            spyOn(store,'randomId').and.callThrough();

            var upload= {
                title: 'Todo three',
                completed: false
            }

            store.save(upload,callback);

            expect(store.distinctId).toHaveBeenCalled();
            expect(store.randomId).toHaveBeenCalled();
            expect(store.checkId).toHaveBeenCalled();


        });


    });

    describe('checkId', function () {


        it('should give true for existing id ', function () {

            expect(store.checkId(1)).toBe(true);

        });

        it('should give false for non-existing id ', function () {

            expect(store.checkId(3)).toBe(false);

        });


    });

    afterEach(function () {

        localStorage.removeItem('testProjet8');
    });

});