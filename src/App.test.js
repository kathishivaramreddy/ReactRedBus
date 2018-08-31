import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {

    it('should have a h2 element', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.exists('h2')).toEqual(true);
      });

    it('should have heading as RedBus in h2 element', () => {
      const wrapper = shallow(<App />);
      const heading = wrapper.find('h2').text();
      expect(heading).toBe('Red Bus');
      });

    it('should have a table',() => {
      const wrapper = shallow(<App />);
      expect(wrapper.exists('table')).toEqual(true);
      });

    it('should have table with 1 row', () => {
      const wrapper = shallow(<App />);
      const rows = wrapper.find('tr');
      expect(rows.length).toEqual(1);
     });

     it('should have table with 1 row and 5 table header', () => {
       const wrapper = shallow(<App />);
       const tableHeader = wrapper.find('th');
       expect(tableHeader.length).toEqual(5);
     });

     it('should have Bus Name as 1st table header', () => {
       const wrapper = shallow(<App />);
       const tableHeader = wrapper.find('th');
        expect(tableHeader.at(0).text()).toBe('Bus Name');
     })

     it('should have From - To as 2nd table header', () => {
       const wrapper = shallow(<App />);
       const tableHeader = wrapper.find('th');
        expect(tableHeader.at(1).text()).toBe('From - To');
     })

});
