"use strict";
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");

const dynamodb_users = new aws.dynamodb.Table(`users`, {
    name: "users",
    attributes: [
        {
            name: "id",
            type: "S"
        },
    ],
    hashKey: "id",
    readCapacity: 1,
    writeCapacity: 1,
})

module.exports = {
    dynamodb_users_name: dynamodb_users.name,
}

