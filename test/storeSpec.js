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


	describe('save', function () {

		it('save without id launch distinctId', function () {

            spyOn(store,'distinctId');

           var upload= {
                id: 3,
			    title: 'Todo three',
                completed: false
            }
			store.save(upload,callback);
			expect(store.distinctId).toHaveBeenCalled();
		});


        it('save without id , lauch  randomId', function () {


            spyOn(store,'randomId');
            var upload= {
                id: 3,
                title: 'Todo three',
                completed: false
            }

            store.save(upload,callback);
           expect(store.randomId).toHaveBeenCalled();

        });


        it('save without id , launch checkId', function () {

            spyOn(store,'checkId');

            var upload= {
                id: 3,
                title: 'Todo three',
                completed: false
            }

            store.save(upload,callback);

            expect(store.checkId).toHaveBeenCalled();
        });


        it('save without id ,launch distinctId randomId checkId', function () {

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


        it('checkId of existing id is true ', function () {

            expect(store.checkId(1)).toBe(true);

        });

        it('checkId of non-existing id is false ', function () {

            expect(store.checkId(3)).toBe(false);

        });


    });

    afterEach(function () {

        localStorage.removeItem('testProjet8');
    });

});