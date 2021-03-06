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

    it('should have two tables ',() =>{
      const wrapper = shallow(<App />);
      const table = wrapper.find('table');
      expect(table.length).toEqual(2);
    })

    it('should have a table with className as firstTable',() => {
      const wrapper = shallow(<App />);
      const table = wrapper.find('.firstTable')
      expect(table.length).toEqual(1);
      });

    it('should have 2 row in firstTable', () => {
      const wrapper = shallow(<App />);
      const rows = wrapper.find('.firstTableRows');
      expect(rows.length).toEqual(2);
     });

     it('table should have 5 table header', () => {
       const wrapper = shallow(<App />);
       const tableHeader = wrapper.find('.firstTableHeadings');
       expect(tableHeader.length).toEqual(5);
     });

     it('should have Bus Name as 1st table header', () => {
       const wrapper = shallow(<App />);
       const tableHeader = wrapper.find('.firstTableHeadings');
        expect(tableHeader.at(0).text()).toBe('Bus Name');
     })

     it('should have From - To as 2nd table header', () => {
       const wrapper = shallow(<App />);
       const tableHeader = wrapper.find('.firstTableHeadings');
        expect(tableHeader.at(1).text()).toBe('From - To');
     })

     it('should have Departure Time as 3rd table header', () => {
       const wrapper = shallow(<App />);
       const tableHeader = wrapper.find('.firstTableHeadings');
        expect(tableHeader.at(2).text()).toBe('Departure Time');
     })

     it('should have Arrival Time as 4th table header', () => {
       const wrapper = shallow(<App />);
       const tableHeader = wrapper.find('.firstTableHeadings');
        expect(tableHeader.at(3).text()).toBe('Arrival Time');
     })

     it('should have Price as 5th table header', () => {
       const wrapper = shallow(<App />);
       const tableHeader = wrapper.find('.firstTableHeadings');
        expect(tableHeader.at(4).text()).toBe('Price');
     })

     it('should have 5 table data',() => {
       const wrapper = shallow(<App />);
       const tabledata = wrapper.find('.firstTableData');
       expect(tabledata.length).toEqual(5);
    })

    it('should have Iravath Travels as 1st table data', () => {
      const wrapper = shallow(<App />);
      const tableData = wrapper.find('.firstTableData');
       expect(tableData.at(0).text()).toBe('Iravath');
    })

    it('should have Hyderabad - Banglore as 2nd table data', () => {
      const wrapper = shallow(<App />);
      const tableData = wrapper.find('.firstTableData');
       expect(tableData.at(1).text()).toBe('Hyderabad - Banglore');
    })

    it('should have 21:30 as Departure Time', () => {
      const wrapper = shallow(<App />);
      const tableData = wrapper.find('.firstTableData');
       expect(tableData.at(2).text()).toBe('21:30');
    })

    it('should have 5:45 as Arrival Time', () => {
      const wrapper = shallow(<App />);
      const tableData = wrapper.find('.firstTableData');
       expect(tableData.at(3).text()).toBe('5:45');
    })

    it('should have INR 700 as Price', () => {
      const wrapper = shallow(<App />);
      const tableData = wrapper.find('.firstTableData');
       expect(tableData.at(4).text()).toBe('700');
    })


    it('should have second table', () => {
      const wrapper = shallow(<App />);
      const table = wrapper.find('.secondTable')
      expect(table.length).toEqual(1);
    })

    it('should have 21 rows in the second table', () => {
      const wrapper = shallow(<App />);
      const rows = wrapper.find('.secondTableRows');
      expect(rows.length).toEqual(21);
    })

    it('should have 5 table heading in the second table ' ,() => {
        const wrapper = shallow(<App />);
        const tableHeadings = wrapper.find('.secondTableHeader');
        expect(tableHeadings.length).toEqual(5)
    })

    it('should have Bus Name as 1st table header in the second table', () => {
      const wrapper = shallow(<App />);
      const secondTableHeader = wrapper.find('.secondTableHeader');
       expect(secondTableHeader.at(0).text()).toBe('Bus Name');
    })

    it('should have From - To as 2nd table header in the second table', () => {
      const wrapper = shallow(<App />);
      const secondTableHeader = wrapper.find('.secondTableHeader');
       expect(secondTableHeader.at(1).text()).toBe('From - To');
    })

    it('should have From - To as 2nd table header in the second table', () => {
      const wrapper = shallow(<App />);
      const secondTableHeader = wrapper.find('.secondTableHeader');
       expect(secondTableHeader.at(1).text()).toBe('From - To');
    })

    it('should have Departure Time as 3rd table header in the second table', () => {
      const wrapper = shallow(<App />);
      const secondTableHeader = wrapper.find('.secondTableHeader');
       expect(secondTableHeader.at(2).text()).toBe('Departure Time');
    })

    it('should have Arrival Time as 4th table header in the second table', () => {
      const wrapper = shallow(<App />);
      const secondTableHeader = wrapper.find('.secondTableHeader');
       expect(secondTableHeader.at(3).text()).toBe('Arrival Time');
    })

    it('should have Price as 5th table header in the second table', () => {
      const wrapper = shallow(<App />);
      const secondTableHeader = wrapper.find('.secondTableHeader');
      expect(secondTableHeader.at(4).text()).toBe('Price');
    })

    it('should have Iravath as table data in the second table', () => {
      const wrapper = shallow(<App />);
      const tableData = wrapper.find('.secondTableData');
       expect(tableData.at(0).text()).toBe('Iravath');
    })
    it('should have Hyderabad - Kolkata as table data in the second table', () => {
      const wrapper = shallow(<App />);
      const tableData = wrapper.find('.secondTableData');
       expect(tableData.at(1).text()).toBe('Hyderabad-Kolkata');
    })
    it('should have 5:30 as departure time in the second table', () => {
      const wrapper = shallow(<App />);
      const tableData = wrapper.find('.secondTableData');
       expect(tableData.at(2).text()).toBe('5:30');
    })
    it('should have 12:30 as Arrival Time in the second table', () => {
      const wrapper = shallow(<App />);
      const tableData = wrapper.find('.secondTableData');
       expect(tableData.at(3).text()).toBe('12:30');
    })
    it('should have 700 Rs as Price in the second table', () => {
      const wrapper = shallow(<App />);
      const tableData = wrapper.find('.secondTableData');
       expect(tableData.at(4).text()).toBe('INR700');
    })

    it('should have Iravath Travels as table data in the second table', () => {
      const wrapper = shallow(<App />);
      const tableData = wrapper.find('.secondTableData');
       expect(tableData.at(5).text()).toBe('Iravath');
    })
    it('should have Hyderabad - Kolkata as table data in the second table', () => {
      const wrapper = shallow(<App />);
      const tableData = wrapper.find('.secondTableData');
       expect(tableData.at(6).text()).toBe('Hyderabad-Kolkata');
    })
    it('should have 7:30 as departure time in the second table', () => {
      const wrapper = shallow(<App />);
      const tableData = wrapper.find('.secondTableData');
       expect(tableData.at(7).text()).toBe('7:30');
    })
    it('should have 14:30 as Arrival Time in the second table', () => {
      const wrapper = shallow(<App />);
      const tableData = wrapper.find('.secondTableData');
       expect(tableData.at(8).text()).toBe('14:30');
    })
    it('should have 700 Rs as Price in the second table', () => {
      const wrapper = shallow(<App />);
      const tableData = wrapper.find('.secondTableData');
       expect(tableData.at(9).text()).toBe('INR700');
    })

});
