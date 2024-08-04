import { afterEach, beforeEach, describe, test } from '@jest/globals'
import puppeteer from "puppeteer";

const EXTENSION_PATH = '../dist'
let page = undefined

describe('Test', () => {
  beforeEach(async () => {
    const browser = await puppeteer.launch({
      headless: true,
      dumpio: true,
      slowMo: 50,
      args: [`--disable-extensions-except=${EXTENSION_PATH}`, `--load-extension=${EXTENSION_PATH}`]
    })

    const pages = await browser.pages()
    page = pages.at(0)
    await page.goto(`chrome://newtab`)
  })

  afterEach(async () => {
    page = undefined
  })

  test('Test 0', async () => {
    // doesn't matter
  })

  test('Test 1', async () => {
    // doesn't matter
  })

  test('Test 2', async () => {
    // doesn't matter
  })

  test('Test 3', async () => {
    // doesn't matter
  })

  test('Test 4', async () => {
    // doesn't matter
  })

  test('Test 5', async () => {
    // doesn't matter
  })

  test('Test 6', async () => {
    // doesn't matter
  })

  test('Test 7', async () => {
    // doesn't matter
  })

  test('Test 8', async () => {
    // doesn't matter
  })

  test('Test 9', async () => {
    // doesn't matter
  })

  test('Test 10', async () => {
    // doesn't matter
  })

  test('Test 11', async () => {
    // doesn't matter
  })

})
