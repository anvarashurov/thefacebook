json.extract! user, :id, :first_name, :last_name, :email_address
json.authoredPostIds user.authored_post_ids
json.authoredCommentIds user.authored_comment_ids