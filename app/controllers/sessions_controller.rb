class SessionsController < ApplicationController

  def create
    hash = JSON.parse(request.body.read)
    p hash
    user = User.find_by_email(hash["email"])
    if user && user.authenticate(hash["password"])
      access_token = SecureRandom.hex
      user.access_token = access_token
      render json: user
    end
  end

  def create
    hash = JSON.parse(request.body.read)
    p hash
    user = User.find_by_email(hash["email"])
    if user && user.authenticate(hash["password"])
      user.destroy     
    end
  end

end
