require_relative "spec_helper"
require_relative "../bank"

describe Bank do
  let(:bank) {Bank.new("TDD Bank")}

  describe ".new" do
    it "creates a Bank Object" do
      expect(bank).to_not eq nil
    end
  end

  describe "#name" do
    it "has a name" do
      expect(bank.name).to eq "TDD Bank"
    end
  end

  describe "#create_account" do
    it "creates an account" do
      bank.create_account("Bob", 200)
      expect(bank.accounts["Bob"]).to eql 200
    end
  end

  describe "#deposit" do
    it "deposits money from customer into ac" do
      bank.create_account("Bob", 200)
      bank.deposit("Bob", 300)
      expect(bank.accounts["Bob"]).to eql 500
    end
  end

  describe "#balance" do
    it "returns the balance for the customer" do
      bank.create_account("Bob", 200)
      expect(bank.balance("Bob")).to eql 200
    end
  end

  describe "#withdraw" do
    it "withdraws money from customer ac" do
      bank.create_account("Bob", 200)
      bank.withdraw("Bob", 100)
      expect(bank.balance("Bob")).to eql 100
    end

    it "ignores request greater than account balance" do
      bank.create_account("Bob", 200)
      bank.withdraw("Bob", 300)
      expect(bank.balance("Bob")).to eql 200
    end

  end

end
=begin
rspec uses DSL — domain-specific language.
still ruby but a variant.
".new" . prefix for class method
"#name" # prefix for instance method
=end
