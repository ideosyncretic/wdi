class Bank
  attr_accessor :name, :accounts

  def initialize(name)
    @name = name
    @accounts = {}
  end

  def create_account(customer, deposit)
    @accounts[customer] = deposit
  end

  def deposit(customer, deposit)
    @accounts[customer] += deposit
  end

  def balance(customer)
    @accounts[customer]
  end

  def withdraw(customer, withdrawal)
    @accounts[customer] -= withdrawal unless withdrawal > balance(customer)
  end

end
