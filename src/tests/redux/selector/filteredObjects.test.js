import objects from '../../fixtures/objects';
import moment from 'moment';
import {filterTest, filter, altFilter} from '../../fixtures/filters';
import filteredObjects from '../../../redux/selector/filteredObjects';
test('should filert by default text', () => {
    const receivedObjects = filteredObjects(objects, filterTest);
    expect(receivedObjects).toEqual([objects[2], objects[1], objects[0]]);
});
test('should filert by  text three', () => {
    const receivedObjects = filteredObjects(objects, {...filterTest, text:'three'});
    expect(receivedObjects).toEqual([objects[2]]);
});
test('should filert by after start date', () => {
    const receivedObjects = filteredObjects(objects, {...filterTest, startDate:moment(0).subtract(3)});
    expect(receivedObjects).toEqual([objects[2], objects[1]]);
});
test('should filert by before end date', () => {
    const receivedObjects = filteredObjects(objects, {...filterTest, endDate:moment(0).add(3)});
    expect(receivedObjects).toEqual([objects[1], objects[0]]);
});
test('should filert by after start date and before end date', () => {
    const receivedObjects = filteredObjects(objects, {...filterTest, endDate:moment(0).add(3), startDate:moment(0).subtract(3)});
    expect(receivedObjects).toEqual([objects[1]]);
});
test('should filert using sort by amount', () => {
    const receivedObjects = filteredObjects(objects, {...filterTest, sortBy:'amount'});
    expect(receivedObjects).toEqual([objects[2], objects[0], objects[1]]);
});