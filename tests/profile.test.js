require('chai').should()
const {expect} = require('chai')

const sinon = require('sinon')
const {info} = require('../src/controllers/profile.controller')
const supertest = require('supertest')

const {APP_URL} = process.env

describe('Profile: function', ()=> {
  it('should return json with success true', ()=>{
    let req = {}
    let res = {
      json: sinon.spy()
    }

    info(req, res)

    res.json.calledOnce.should.to.be.true
    res.json.firstCall.args[0].success.should.to.be.true
  })
})

describe('Profile: endpoint', ()=> {
  
  it('user get profile without authorization', (done)=> {
    supertest(APP_URL)
    .get('/profile')
    .expect(401)
    .end((err, response)=>{
      expect(response.body.success).to.be.false
      done()
    })
  })

  it('user get profile with authorization', (done)=> {
    supertest(APP_URL)
    .post('/auth/login')
    .send('email=admin@mail.com&password=1234')
    .end((err, res)=>{
      const {token} = res.body
      supertest(APP_URL)
      .get('/profile')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .end((err, res)=>{
        expect(res.body.success).to.be.true
        expect(res.body.results).to.be.a('object')
        expect(res.body.results.fullName).to.be.a('string')
        done()
      })
    })
  })
})

