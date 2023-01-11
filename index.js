#!/usr/bin/env node

/**
 * feog-cli
 * CLI example for FEOG
 *
 * @author Felix E. Orduz G. <felix-orduz.dev>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	console.log("Mi primera CLI")
	debug && log(flags);
})();
