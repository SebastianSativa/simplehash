const XXHash = require('xxhash');
const SEED = 0xCAFEBABE;

module.exports = function(string) {
	return XXHash.hash(Buffer.from(String(string).toString(), 'utf8'), SEED);
}