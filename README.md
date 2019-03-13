# Corda endpoints

* Publisher: 40.87.80.12:10050
* FanA: 40.87.80.12:10053
* FanB: 40.87.80.12:10056

Paths:

* GET /tokens

* POST /create-token

    parameters:
        owner: string
        
        description: string
      
* POST /transfer-token

    parameters:
        id: string
        
        newOwner: string
