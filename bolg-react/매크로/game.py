from os import name
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from time import sleep
from selenium.webdriver.common.by import By

options = webdriver.ChromeOptions()
options.add_argument('window-size=1920,1080')

driver = webdriver.Chrome('chromedriver', options=options)
driver.implicitly_wait(1)

driver.get(url='http://localhost:3000/')
money_botton = driver.find_element_by_css_selector(
    '#root > div > div.sc-gsTCUz.hsmfDZ > button')


upgrade_button = driver.find_element_by_name( """ 오류가 좀있음 """
    '#root > div > div.sc-eCssSg.lculzP > div > button')
while True:
    if upgrade_button.ByNAME == 'upGrade':
      upgrade_button.click()
    money_botton.click()
