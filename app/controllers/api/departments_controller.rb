class Api::DepartmentsController < ApplicationController

  before_action :set_item
  before_action :set_review, only: [:update, :destroy]

  def index
    render json: @item.departments
  end

  def create
    department = @item.departments.new(review_params)
    if department.save
      render json: department
    else
      render json: department.errors
    end
  end

  def update
    if @department.update(review_params)
      render json: @department
    else
      render json: @department.errors
    end
  end

  def destroy
    @department.destroy
  end

  private
    def set_item
      @item = Item.find(params[:item_id])
    end
    
    def set_review
      @department = Department.find(params[:id])
    end

    def review_params
      params.require(:department).permit(:title, :body, )
    end
end
