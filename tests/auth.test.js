const {expect} = require('chai')
const sinon = require('sinon')
const supertest = require('supertest')

const {login, register} = require('../src/controllers/auth.controller')
const {APP_URL} = process.env

describe('Auth: Login function', ()=>{
  it('wrong email and password', ()=>{
    let req = {
      matchedData: {
        email: 'some@mail.com',
        password: '1234'
      }
    }
    let res = {
      json: sinon.spy()
    }

    login(req, res)

    expect(res.json.firstCall.args[0].success).to.be.false
  })

  it('login success', ()=>{
    let req = {
      matchedData: {
        email: 'admin@mail.com',
        password: '1234'
      }
    }
    let res = {
      json: sinon.spy()
    }

    login(req, res)

    expect(res.json.firstCall.args[0].success).to.be.true
    expect(res.json.firstCall.args[0].token).to.be.a('string')
  })
})

describe('Auth: Login endpoint', ()=> {
  it('Wrong email format', (done)=> {
    supertest(APP_URL)
    .post('/auth/login')
    .send('email=admin&password=1234')
    .expect(400)
    .end((err, res)=> {
      expect(res.body.success).to.be.false
      expect(res.body.errors.length).equal(1)
      expect(res.body.errors[0].param).equal('email')
      done()
    })
  })
  it('Empty password', (done)=> {
    supertest(APP_URL)
    .post('/auth/login')
    .send('email=admin@mail.com&password=')
    .expect(400)
    .end((err, res)=> {
      expect(res.body.success).to.be.false
      expect(res.body.errors.length).equal(1)
      expect(res.body.errors[0].param).equal('password')
      done()
    })
  })
})

describe('Auth: Register function', ()=> {
  it('register function return json', ()=>{
    let req = {}
    let res = {
      json: sinon.spy()
    }
    register(req, res)
    expect(res.json.calledOnce).to.be.true
    expect(res.json.firstCall.args[0]).to.be.a('object')
    expect(res.json.firstCall.args[0].success).to.be.true
  })
})