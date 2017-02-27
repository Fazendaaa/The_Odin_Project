require "spec_helper"
require "zombie"

describe Zombie do
	it "is named Ash" do
		zombie = Zombie.new
		zombie.name.should == 'Ash'
	end

	it "has no brains" do
		zombie = Zombie.new
		zombie.brains.should be < 1
	end

	it "must be dead" do
		zombie = Zombie.new
		zombie.alive.should be_falsey
	end

	it "must be rotting" do
		zombie = Zombie.new
		zombie.rotting.should be_truthy
	end

	it "must be old" do
		zombie = Zombie.new
		zombie.age.should_not < 35
	end

	it "is hungry" do
		zombie = Zombie.new
		zombie.should be_hungry
	end
end