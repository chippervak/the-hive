/*global Game, Memory, FIND_SOURCES*/
module.exports = function () {
	/*var hatchery = Memory.hatcheries[this.memory.hatcheryName];

	if (!this.memory.mule) {
		this.memory.mule = 'incoming';
		hatchery.prodQ.unshift({
			role: 'mule',
			muleType: 'pickup',
			targetName: this.name
		});

		hatchery.prodQ.unshift({
			role: 'courier'
		});
	}*/

	if (this.carry.energy < this.carryCapacity) {
		var source = Game.getObjectById(this.memory.sourceID);

		this.moveTo(source);
		this.harvest(source);
	} else {
		var spawn = Game.getObjectById(this.memory.spawnID);
		this.moveTo(spawn);
		this.transferEnergy(spawn);
	}
};
