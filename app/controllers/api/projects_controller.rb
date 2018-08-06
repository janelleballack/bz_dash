class Api::ProjectsController < ApplicationController
	before_action :find_project, only: [:show, :edit, :update, :destroy]

	def index
			@projects = Project.all.order("created_at DESC")
	end

	def show
	end

	def new
		@project = Project.new
		@clients = Client.all
	end

	def create
		@project =  Project.create(project_params)

		if @project.save
			redirect_to edit_project_path(@project)
		else
			render 'new'
		end
	end

	def edit
		@clients = Client.all
	end

	def update
		if @project.update(project_params)
			redirect_to project_path(@project)
		else
			render 'edit'
		end
	end

	def destroy
		@project.destroy
		redirect_to projects_path(@projects)
	end

	def complete
		@project = Project.find(params[:id])
		@project.update_attribute(:completed_at, Time.now)
		redirect_to projects_path(@projects), notice: "project successfully completed!"
	end

	private
		def project_params
			params.require(:project).permit(:name, :description, :hours, :deadline)
		end

		def find_project
			@project = Project.find(params[:id])
		end
end