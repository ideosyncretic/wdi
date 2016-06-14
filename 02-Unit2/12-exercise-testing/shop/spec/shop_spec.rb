require_relative "spec_helper.rb"
require_relative "../shop.rb"

describe Shop do
  let(:shop) {Shop.new("Pet Shop")}

    describe ".new" do
      it "creates a Shop Object" do
        expect(shop.name).to_not eq nil
      end
    end

    describe "#name" do
      it "has a name" do
        expect(shop.name).to eq "Pet Shop"
      end
    end

    describe "#create_product" do
      it "creates a product" do
        shop.create_product("Kitten", 5)
        expect(shop.products["Kitten"]).to eql 5
      end
    end

    describe "#sell_product" do
      it "subtracts from a product's stock" do
        shop.create_product("Kitten", 5)
        shop.sell_product("Kitten", 1)
        expect(shop.products["Kitten"]).to eql 4
      end

      it "ignores sale if order quantity exceeds product stock" do
        shop.create_product("Kitten", 5)
        shop.sell_product("Kitten", 6)
        expect(shop.products["Kitten"]).to eql 5
      end
    end

    describe "#restock_product" do
      it "adds to product's stock" do
        shop.create_product("Kitten", 5)
        shop.restock_product("Kitten", 1)
        expect(shop.products["Kitten"]).to eql 6
      end
    end

    describe "#set_product_limit" do
      it "sets the maximum stock for the product" do
        shop.create_product("Kitten", 5)
        shop.restock_product("Kitten", 6)
        shop.set_product_limit("Kitten", 10)
        expect(shop.products["Kitten"]).to eql 5
      end
    end

end
