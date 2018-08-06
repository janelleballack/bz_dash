class Api::DashboardController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!
    
  def index
    @users = User.all
    @clients = Client.all
    @projects = Project.all.order("created_at DESC")
    render json: @users, @clients, @projects
    
    end
    def show

    end

    def complete
      @task_item.update_attribute(:completed_at, Time.now)
      redirect_to @task_list, notice: "Task completed"
    end
end
