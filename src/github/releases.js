'use strict';

const request = require('request');
const _ = require('lodash');

module.exports.latest = (owner, repo) => {

    return new Promise((resolve, reject) => {

        const options = {
            method: 'GET',
            url: `https://api.github.com/repos/${owner}/${repo}/releases`,
            json: true,
            headers: {
                'User-Agent': 'Docker Version Checker'
            }
        };

        request(options, (err, response, body) => {

            if(err) {
                reject(err);
            } else {

                if(_.isString(body)) {
                    body = JSON.parse(body);
                }

                if(_.isArray(body) && body.length > 0) {

                    let name = _.first(body).name;

                    name = name.replace('v', '');

                    resolve(name);
                    
                } else {
                    resolve('none');
                }

            }

        });

    });

};
