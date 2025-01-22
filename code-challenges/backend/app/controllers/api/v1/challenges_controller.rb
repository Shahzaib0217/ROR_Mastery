module Api
  module V1
    class ChallengesController < ApplicationController
      # before taking mentioned actions authenticate the user
      before_action :authenticate_user!, only: %i[create update destroy]
      before_action :set_challenges, only: %i[show update destroy]
      before_action :authorize_admin, only: %i[create update destroy]
      
      # GET /api/v1/challenges
      def index
        # Show all the challenges
        # @challenges is an instance variable
        @challenges = Challenge.all
        render json: @challenges
      end
      
      # GET /api/v1/challenges
      def active_and_upcoming
        @active_challenges = Challenge.active
        @upcoming_challenges = Challenge.upcoming
        @all = Challenge.all
        render json: {active: @active_challenges, upcoming: @upcoming_challenges, all: @all}
      end

      # POST /api/v1/challenges 
      def create
        # getting current_user value from devise
        @challenge = Challenge.new(challenges_params.merge(user_id: current_user.id))
        if @challenge.save
          render json: {message:'Challenge Added Successfully', data: @challenge}
        else
          render json: {message:'Challenge Not Added', data: @challenge.errors}
        end
      end

      # GET    /api/v1/challenges/:id
      def show
        if @challenge
          render json: {message: 'Challenge found', data: @challenge}
        else
          render json: {message: 'Challenge not found', data: @challenge.errors}
        end
      end

      # PATCH  /api/v1/challenges/:id
      def update
        if @challenge.update(challenges_params)
          render json: @challenge
        else
          render json: {message: 'Challenge not updated', data: @challenge.errors}
        end
      end

      # DELETE /api/v1/challenges/:id
      def destroy
        if @challenge.destroy
          render json: {message: 'Challenge found & Deleted', data: @challenge}
        else
          render json: {message: 'Challenge not found, So cant be deleted', data: @challenge.errors}
        end
      end

      private 
      def authorize_admin
        render json: {message: 'Forbidden Request'} unless current_user.email == ENV['ADMIN_EMAIL']
      end

      # Use callbacks to share common setup or constraints between actions.
      def set_challenges
        @challenge = Challenge.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def challenges_params
        params.require(:challenge).permit(:title, :description, :start_date, :end_date)
      end
    end
  end
end