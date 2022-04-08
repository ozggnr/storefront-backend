import { ProductDB } from '../products-model';
import supertest from 'supertest';
import app from '../../server'

const request = supertest(app);
const product = new ProductDB()

describe("Product", () => {
	let token: string
	beforeAll(async () => {
		const response = await request.post('/users/auth').send({
			email: 'userA@gmail.com', 
			password: 'passwordA'
		})
		token = response.body
		expect(response.status).toBe(200)
	})
	it('should show the product with id=3', async () => {
		const response = await request.get('/products/3')
		expect(response.body).toEqual({
			id: 3,
			name: 'productC',
			price: '123.25'
		});
	});
	it('create method should add a product', async () => {
		const response = await request.post('/products').send({
			name: 'productX',
			price: '300.50'
		}).set("Authorization", `Bearer ${token}`)
		expect(response.body).toEqual({
			id: 5,
			name: 'productX',
			price: '300.50'
		});
	});
	it('should have an index method', () => {
		expect(product.index).toBeDefined();
	});

	it('should have a show method', () => {
		expect(product.show).toBeDefined();
	});

	it('should have a create method', () => {
		expect(product.create).toBeDefined();
	});
	it('index method should return a list of products', async () => {
		const result = await product.index();
		expect(result.length).toBeGreaterThan(0);
	})

	it('show method should return the correct product', async () => {
		const result = await product.show("1");
		expect(result.id).toBe(1)
	})
})

