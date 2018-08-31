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

    

});
