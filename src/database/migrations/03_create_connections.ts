import Knex from 'knex'

const tableName = 'connections'

export async function up(knex: Knex) {
    return knex.schema.createTable(tableName, table => {
        table.increments('id').primary()

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')

        table.timestamp('created_at')
            .defaultTo('now()')
            .notNullable()
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable(tableName)
}