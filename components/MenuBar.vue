<template>
    <b-navbar toggleable="lg" type="dark" variant="dark" sticky>
        <b-container>
            <b-navbar-brand>
                <nuxt-link style="text-decoration: none; color: white" to="/">
                    {{$t('loan_manager')}}
                </nuxt-link>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" :to="localePath('/users')">
                            Users
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" :to="localePath('/borrowers')">
                            Borrowers
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" :to="localePath('/accounts')">
                            Accounts
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" :to="localePath('/loans')">
                            Loans
                        </nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" :to="localePath('/installments')">
                            Installments
                        </nuxt-link>
                    </li>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown :text="$i18n.locale.toUpperCase()" right>
                        <li role="presentation">
                            <nuxt-link
                                :active="$i18n.locale==='bn'"
                                active-class="active"
                                role="menuitem"
                                class="dropdown-item"
                                :to="switchLocalePath('bn')">
                                Bengali
                            </nuxt-link>
                        </li>
                        <li role="presentation">
                            <nuxt-link
                                :active="$i18n.locale==='en'"
                                active-class="active"
                                role="menuitem"
                                class="dropdown-item"
                                :to="switchLocalePath('en')">
                                English
                            </nuxt-link>
                        </li>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template #button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>
