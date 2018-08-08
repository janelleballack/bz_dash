class Api::ClientsController < ApplicationController
  # before_action :authenticate_user
  before_action :set_client, only: [:show, :update, :destroy]
  
  # GET /clients
    def index
      # if current_user.admin?
        json = Client.all.map do |client|
        {
          id: client.id,
          first_name: client.first_name,
          first_name: client.first_name,
          last_name: client.last_name,
          company: client.company,
          address: client.address,
          city: client.city, 
          state: client.state, 
          zipcode:client.zipcode, 
          email: client.email, 
          phone: client.phone,
          project_id: client.project_id,
          projects: client.projects.map do |project|
            {
              id: project.id,
              name: project.name,
              
              errors: project.errors,
              _destroy: project._destroy
              
            }                                               end                                
        }
       end
       render json: json
  end
 
 # GET /clients/1
  def show
    client = @client
      render json: client_json(client)
  end

  # POST /clients
    def create 
      client = Client.new(client_params)
      result = client.save
      render client_json(client), status: result ? 200 : 422
    end

  # PATCH/PUT /events/1
    def update
      client = @client
      client.attributes = client_params
        result = client.save
        render client_json(client), status: result ? 200 : 422
    end

  # DELETE /clients/1
    def destroy
        @client.destroy
        render json: { result: :ok }
    end

private
  # Use callbacks to share common setup or constraints between actions.
    def client_json(client)
      {
        id: client.id,
        first_name: client.first_name,
        last_name: client.last_name,
        company: client.company,
        address: client.address,
        city: client.city, 
        state: client.state, 
        zipcode:client.zipcode, 
        email: client.email, 
        phone: client.phone,
        project_id: client.project_id,
        errors: client.errors,
        projects: client.projects.map do |project|
          {
            id: project.id,
            name: project.name,
            
            errors: project.errors,
            _destroy: project._destroy
            
          }                                               end   
      }
    end

    def set_client
      @client = Client.find(params[:id])
    end

  # Only allow a trusted parameter "white list" through
    
  def client_params
    params.require(:client).permit(:first_name, :last_name, :address, :city, :state, :zipcode, :email, :company, :phone, :project_id, projects_attributes: [:id, :name, :destroy])
   end
end