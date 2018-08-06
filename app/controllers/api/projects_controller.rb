class Api::ProjectsController < ApplicationController
	before_action :find_project, only: [:show, :edit, :update, :destroy]

	# GET /projects
	def index
			@projects = Project.all.order("created_at DESC")
			render json: @projects
	end

 # GET /projects/1
	def show
		render json: @project
end

	def new
		@project = Project.new
		@clients = Client.all
	end

	# POST /projects
	def create 
		@project = Project.new(project_params)
		
		if @project.save
			render json: @project, status: :created
		else
			render json: @project.errors, status: :unprocessable_entity
		end
	end

	def edit
		@clients = Client.all
	end

	 # PATCH/PUT /events/1
	 def update
		if @project.update(project_params)
			render json: @project
		else
			render json: @project.errors, status: :unprocessable_entity
		end
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
		notice: "project successfully completed!"
	end

	private
		def project_params
			params.require(:project).permit(:client_id, :name, :description, :hours, :deadline, :completed_at)
		end

		def find_project
			@project = Project.find(params[:id])
		end
end