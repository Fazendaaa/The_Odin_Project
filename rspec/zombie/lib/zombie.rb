class Zombie
	attr_accessor :name, :brains, :alive, :rotting, :age

	def initialize
		@name = 'Ash'
		@brains = 0
		@alive = false
		@rotting = true
		@age = 35
	end

	def hungry?
		return true
	end
end