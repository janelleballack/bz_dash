class Api::ProjectsController < ApplicationController
	before_action :find_project, only: [:show, :edit, :update, :destroy]

	# GET /projects
	def index
			json = Project.all.order("created_at DESC").map do |project|
				{
					id:project.id,
					name: project.name										
				}
			end
			render json: json
	end

 # GET /projects/1
	def show
		project = @project
		render json: project_json(project)
end

	def new
		@project = Project.new
		@clients = Client.all
	end

	# POST /projects
	def create 
		project = Project.new(project_params)
		result = project.save
		render json: project_json(project), status: result ? 200 : 422
	end

	def edit
		@clients = Client.all
	end

	 # PATCH/PUT /events/1
	 def update
		project = @project
		project.attributes = project_params
		result = project.save
		render json: project_json(project), status: result ? 200 : 422
end

	# DELETE /clients/1
	def destroy
		@project.destroy
		if @project.destroy
			head :no_content, status: :ok
		else
			render json: @project.errors, status: :unprocessable_entity
		end
end

	def complete
		@project = Project.find(params[:id])
		@project.update_attribute(:completed_at, Time.now)
		# notice: "project successfully completed!"
	end

	private
	
	def project_json(project)
		{
			id:project.id,
			name: project.name,
			errors: project.errors,
			client: project.client.first_name
		}
	end

		def project_params
			params.require(:project).permit(:client_id, :name, :description, :hours, :deadline, :completed_at, client_attributes: [:first_name])
		end

		def find_project
			@project = Project.find(params[:id])
		end
end