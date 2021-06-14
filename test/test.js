module.exports = {
    //function Call
    'Launch Browser' : function(browser){
        browser
            //Step 1: Launch Browser with URL of Leaf Taps 
            .url("http://leaftaps.com/opentaps/control/main")

            //Step 2: verify whether username field is visible
            .verify.visible('#username')

            //Step 3: Set Username in username field
            .setValue('#username','DemoSalesManager')

            //Step 4: verify whether password field is visible
            .verify.visible('#password')

            //Step 5: Set Username in password field
            .setValue('#password','crmsfa')

            //Step 6: click on Login Button 
            .click('xpath','//*[@type="submit"]').pause(2000)

            //Step 7: assert login page URL
            .assert.urlContains("http://leaftaps.com/opentaps/control/login")
    }
}