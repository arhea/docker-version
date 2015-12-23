'use strict';

const releases = require('./src/github/releases');
const colors = require('colors');

function main() {

    var requests = [
        releases.latest('docker', 'docker'),
        releases.latest('docker', 'machine'),
        releases.latest('docker', 'compose'),
        releases.latest('docker', 'swarm')
    ];

    Promise.all(requests).then((releases) => {

        console.log('Latest Versions'.bold.underline.green);
        console.log('Docker Engine:', releases[0]);
        console.log('Docker Machine:', releases[1]);
        console.log('Docker Compose:', releases[2]);
        console.log('Docker Swarm:', releases[3]);

    });

}

main();
