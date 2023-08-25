# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_08_25_170705) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "credit_cards", force: :cascade do |t|
    t.string "card_holder"
    t.string "card_number"
    t.string "expiration_date"
    t.string "cvv"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "payment_method"
  end

  create_table "easy_payments", force: :cascade do |t|
    t.string "easy_name"
    t.string "easy_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "payment_method"
  end

  create_table "jazz_payments", force: :cascade do |t|
    t.string "jazz_name"
    t.string "jazz_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "payment_method"
  end

  create_table "sada_payments", force: :cascade do |t|
    t.string "sada_name"
    t.string "sada_number"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "payment_method"
  end

end
