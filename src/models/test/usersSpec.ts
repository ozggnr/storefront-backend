import supertest from 'supertest';
import { UserDB } from '../users-model';
import app from '../../server'

const request = supertest(app)
const user = new UserDB()

describe("User", () => {
	let token: string
	beforeAll(async () => {
		const response = await request.post('/users/auth').send({
			email: 'userA@gmail.com', 
			password: 'passwordA'
		})
		token = response.body
		expect(response.status).toBe(200)
	})
	it('api endpoint returns successfully', async () => {
		const response = await request.get(`/users/${1}`).set("Authorization", `Bearer ${token}`)
		expect(response.status).toBe(200)
	})
	it('should create a new user', async () => {
		const response = await request.post(`/users`).send({
			firstName: 'ozge',
			lastName: 'test',
			email: 'ozge@test.com'
		}).set("Authorization", `Bearer ${token}`)
		expect(response.body.email).toEqual('ozge@test.com')
	})
	it('index method should return a list of users', async () => {
		const result = await user.index();
		expect(result.length).toBeGreaterThan(0);
	})

	it('show method should return the user successfully', async () => {
		const result = await user.show("3")
		expect(result).toBeTruthy()
	})
	it('show method should return the user successfully', async () => {
		const result = await user.show("3")
		expect(result.id).toBe(3)
	})

	it('should have a create method', () => {
		expect(user.create).toBeDefined();
	});
})