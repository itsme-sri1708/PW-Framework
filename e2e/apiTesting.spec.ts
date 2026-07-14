import { test, expect } from '@playwright/test'
import { log } from 'node:console'

test.describe('API Testing', () => {

    test('TC1 - GET METHOD', async ({ request }) => {

        const response = await request.get('http://localhost:3000/products')
        //console.log(response)
        const body = await response.json()
        console.log(body)
        expect(response.status()).toBe(200)
        expect(response.statusText()).toBe('OK')

    })

    test('TC002-PU Method', async ({ request }) => {

        const response = await request.post('http://localhost:3000/products', {
            data: {
                id: "3",
                name: "Post Dress",
                price: "Rs. 1000",
                brand: "Madame",
                category: {
                    usertype: {
                        usertype: "Women"
                    },
                    category: "Dress"
                }
            }

        })

        await expect(response.status()).toBe(201)
        await expect(response.statusText()).toBe('Created')


    })

    test('TC03 - Delete Method', async ({ request }) => {

        const response = await request.delete('http://localhost:3000/products/6Z4Y3pVliVY')
        await expect(response.status()).toBe(200)
        await expect(response.statusText()).toBe('OK')

    })

    test('TC04-PUT Method', async ({ request }) => {

        const response = await request.put('http://localhost:3000/products', {
            data: {
                id: "3",
                name: "put Dress",
                price: "Rs. 1000",
                brand: "Madame",
                category: {
                    usertype: {
                        usertype: "Women"
                    },
                    category: "Dress"
                }
            }


        })

        expect(response.status()).toBe(200)
        expect(response.statusText()).toBe('OK')
    })

    test('Mock Api Response', async ({ page }) => {

        await page.route('https://conduit-api.bondaracademy.com/api/tags', async route => {
            const tags = {
                "tags": [
                    "Test",
                    "Test1",
                    "Test2",
                    "YouTube"
                ]
            }
            await route.fulfill({
                body: JSON.stringify(tags)
            })
        })
        await page.goto('https://conduit.bondaracademy.com/')
        await expect(page.locator('.tag-list')).toContainText('Test1')
    })

    test('Mock2', async ({ page }) => {

        await page.route('https://conduit-api.bondaracademy.com/api/tags', async route => {
            const tags = {
                "tags": [
                    "Test",
                    "Blog",
                    "Coding",
                    "YouTube"
                ]
            }

            await route.fulfill ({
                body: JSON.stringify(tags)

            })
        })

        await page.goto('https://conduit.bondaracademy.com/')
        await expect(page.locator('.tag-list')).toContainText('Blog')

            
    })

})


/*
const [newPage] = await Promise.all ([
    context.waitforEvent('page'),
    await page.click('#open')
])

*/