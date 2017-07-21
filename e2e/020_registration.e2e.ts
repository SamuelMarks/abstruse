import { browser, by, element } from 'protractor';
import { delay } from './utils';

describe('User Login', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it(`shoud reject register when password don't match`, () => {
    browser.get('/setup')
      .then(() => delay(5000))
      .then(() => element(by.css('[name="btn-continue"]')).click())
      .then(() => element(by.css('.form-input[name="email"]')).sendKeys('john@gmail.com'))
      .then(() => element(by.css('.form-input[name="name"]')).sendKeys('John Wayne'))
      .then(() => element(by.css('.form-input[name="password"]')).sendKeys('test123'))
      .then(() => element(by.css('.button[name="btn-register"]')).isEnabled())
      .then(enabled => expect(enabled).toEqual(false))
      .then(() => browser.getCurrentUrl())
      .then(url => expect(url).toEqual('http://localhost:6500/setup'));
  });

  it('shoud successfully register user', () => {
    browser.get('/setup')
      .then(() => delay(5000))
      .then(() => element(by.css('[name="btn-continue"]')).click())
      .then(() => element(by.css('.form-input[name="email"]')).sendKeys('john@gmail.com'))
      .then(() => element(by.css('.form-input[name="name"]')).sendKeys('John Wayne'))
      .then(() => element(by.css('.form-input[name="password"]')).sendKeys('test123'))
      .then(() => element(by.css('.form-input[name="password2"]')).sendKeys('test123'))
      .then(() => element(by.css('.button[name="btn-register"]')).click())
      .then(() => browser.get('/login'))
      .then(() => browser.getCurrentUrl())
      .then(url => expect(url).toEqual('http://localhost:6500/login'));
  });

});