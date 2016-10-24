require 'test_helper'

class PatternLibControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get pattern_lib_index_url
    assert_response :success
  end

end
