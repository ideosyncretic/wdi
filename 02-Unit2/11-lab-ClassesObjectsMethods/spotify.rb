class User
  attr_accessor :username, :membership, :playlists
  def username
    @name
  end

  def membership_plan
    @membership_plan
    "free" || "premium" || "family"
  end

  def subscription_charge(membership_plan)
    if (membership_plan == "free")
      return false
    elsif (membership_plan == "premium")
      return 10
    elsif (membership_plan == "family")
      return 14
    end

  def playlists
    @playlists
  end
end

new_user = User.new
