'use strict';

/**
 * GAMI EMPIRE - INTERFACE CONNECTOR
 * Bridges AI_Master.js with index.html
 * Zero Errors | Light Mode Enforcement | Professional Architecture
 */

class GameEngine {
    constructor() {
        // Initialize AI Master
        this.aiMaster = window.GAMI_AI_MASTER?.getAIMaster();
        
        if (!this.aiMaster) {
            console.error('AI Master not found. Loading fallback...');
            this.initializeFallback();
            return;
        }
        
        // Game State
        this.currentScreen = 'splashScreen';
        this.userState = null;
        this.worldRenderer = null;
        
        // Initialize
        this.initialize();
    }

    initialize() {
        try {
            // Wait for DOM to be ready
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.setup());
            } else {
                this.setup();
            }
        } catch (error) {
            console.error('Game Engine initialization error:', error);
            this.handleInitializationError(error);
        }
    }

    setup() {
        console.log('GAMI Game Engine: Setting up interface connections...');
        
        // Enforce light mode
        this.enforceLightMode();
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Setup AI interface
        this.setupAIInterface();
        
        // Setup world rendering
        this.setupWorldRendering();
        
        // Initialize screens
        this.initializeScreens();
        
        console.log('GAMI Game Engine: Setup complete');
    }

    enforceLightMode() {
        // Remove any dark mode classes
        document.documentElement.classList.remove('dark-mode', 'sovereign-mode');
        document.documentElement.classList.add('light-mode');
        
        // Set light mode variables
        document.documentElement.style.setProperty('--color-background-primary', '#FFFFFF');
        document.documentElement.style.setProperty('--color-text-primary', '#050505');
        
        // Disable any dark mode transitions
        document.documentElement.style.setProperty('--transition-slow', '0s');
    }

    setupEventListeners() {
        // Screen navigation
        this.setupScreenNavigation();
        
        // Authentication
        this.setupAuthentication();
        
        // AI Interface
        this.setupAIControls();
        
        // Settings
        this.setupSettingsControls();
        
        // Admin controls
        this.setupAdminControls();
        
        // World interactions
        this.setupWorldInteractions();
    }

    setupScreenNavigation() {
        // Show screen function
        window.showScreen = (screenId) => {
            // Hide all screens
            document.querySelectorAll('.screen').forEach(screen => {
                screen.classList.remove('active');
            });
            
            // Show target screen
            const targetScreen = document.getElementById(screenId);
            if (targetScreen) {
                targetScreen.classList.add('active');
                this.currentScreen = screenId;
                
                // Update UI for the screen
                this.updateScreenUI(screenId);
            }
        };
        
        // Menu controls
        document.getElementById('navMenu')?.addEventListener('click', () => {
            document.getElementById('sovereignMenu').classList.add('active');
        });
        
        document.getElementById('menuClose')?.addEventListener('click', () => {
            document.getElementById('sovereignMenu').classList.remove('active');
        });
        
        // Back buttons
        document.getElementById('aiBackBtn')?.addEventListener('click', () => {
            showScreen('dashboardScreen');
        });
        
        document.getElementById('settingsBackBtn')?.addEventListener('click', () => {
            showScreen('dashboardScreen');
        });
        
        // Dashboard actions
        document.getElementById('aiMasterBtn')?.addEventListener('click', () => {
            showScreen('aiScreen');
        });
        
        document.getElementById('settingsBtn')?.addEventListener('click', () => {
            showScreen('settingsScreen');
            this.loadSettingsUI();
        });
        
        // Navigation dock
        document.querySelectorAll('.dock-item').forEach(item => {
            item.addEventListener('click', () => {
                const screen = item.dataset.screen;
                if (screen) {
                    showScreen(screen + 'Screen');
                }
            });
        });
    }

    setupAuthentication() {
        // Login form
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                await this.handleLogin();
            });
        }
        
        // Signup form
        const signupForm = document.getElementById('signupForm');
        if (signupForm) {
            signupForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                await this.handleSignup();
            });
        }
        
        // Admin access
        document.getElementById('adminAccess')?.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('loginForm').classList.remove('active');
            document.getElementById('signupForm').classList.remove('active');
            document.getElementById('adminForm').classList.add('active');
        });
        
        // Form toggles
        document.getElementById('showSignup')?.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('loginForm').classList.remove('active');
            document.getElementById('signupForm').classList.add('active');
            document.getElementById('adminForm').classList.remove('active');
        });
        
        document.getElementById('showLogin')?.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('signupForm').classList.remove('active');
            document.getElementById('loginForm').classList.add('active');
            document.getElementById('adminForm').classList.remove('active');
        });
        
        document.getElementById('backToLogin')?.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('adminForm').classList.remove('active');
            document.getElementById('loginForm').classList.add('active');
        });
        
        // Admin form submission
        const adminForm = document.getElementById('adminForm');
        if (adminForm) {
            adminForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                await this.handleAdminAccess();
            });
        }
    }

    async handleLogin() {
        try {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (!username || !password) {
                this.showError('Please enter username and password');
                return;
            }
            
            this.showLoading('Authenticating...');
            
            const result = await this.aiMaster.authenticateUser(username, password);
            
            if (result.success) {
                this.userState = result.user;
                this.updateUserUI();
                showScreen('dashboardScreen');
                this.showSuccess('Authentication successful');
            }
            
        } catch (error) {
            this.showError(error.message);
        } finally {
            this.hideLoading();
        }
    }

    async handleSignup() {
        try {
            const username = document.getElementById('newUsername').value;
            const password = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (!username || !password || !confirmPassword) {
                this.showError('Please fill all fields');
                return;
            }
            
            this.showLoading('Creating account...');
            
            const result = await this.aiMaster.createUser(username, password, confirmPassword);
            
            if (result.success) {
                this.userState = result.user;
                this.updateUserUI();
                showScreen('dashboardScreen');
                this.showSuccess('Account created successfully');
            }
            
        } catch (error) {
            this.showError(error.message);
        } finally {
            this.hideLoading();
        }
    }

    async handleAdminAccess() {
        try {
            const username = document.getElementById('adminUsername').value;
            
            if (!username) {
                this.showError('Please enter target username');
                return;
            }
            
            this.showLoading('Executing sovereign override...');
            
            const result = await this.aiMaster.ghostAccessUser(username);
            
            if (result.success) {
                this.userState = this.aiMaster.getGameState().currentUser;
                this.updateUserUI();
                showScreen('dashboardScreen');
                this.showSuccess(`Ghost access to ${username} successful`);
            }
            
        } catch (error) {
            this.showError(error.message);
        } finally {
            this.hideLoading();
        }
    }

    setupAIInterface() {
        // AI Input
        const aiInput = document.getElementById('aiInput');
        const aiSendBtn = document.getElementById('aiSendBtn');
        const aiMessages = document.getElementById('aiMessages');
        
        if (!aiInput || !aiSendBtn || !aiMessages) return;
        
        const sendMessage = async () => {
            const message = aiInput.value.trim();
            if (!message) return;
            
            // Add user message
            this.addAIMessage(message, 'user');
            aiInput.value = '';
            
            // Get AI response
            try {
                const response = await this.aiMaster.processAIQuery(message);
                this.addAIMessage(response, 'ai');
            } catch (error) {
                this.addAIMessage({
                    type: 'error',
                    message: 'I encountered an error processing your query.'
                }, 'ai');
            }
        };
        
        aiSendBtn.addEventListener('click', sendMessage);
        
        aiInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    addAIMessage(content, sender = 'ai') {
        const messagesContainer = document.getElementById('aiMessages');
        if (!messagesContainer) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        if (sender === 'user') {
            messageDiv.innerHTML = `
                <div class="message-header">
                    <span class="message-sender">You</span>
                    <span class="message-time">${new Date().toLocaleTimeString()}</span>
                </div>
                <div class="message-content">
                    <p>${content}</p>
                </div>
            `;
        } else {
            // AI message
            let messageHTML = '';
            
            if (typeof content === 'object') {
                messageHTML = this.formatAIResponse(content);
            } else {
                messageHTML = `<p>${content}</p>`;
            }
            
            messageDiv.innerHTML = `
                <div class="message-header">
                    <span class="message-sender">AI Master</span>
                    <span class="message-time">${new Date().toLocaleTimeString()}</span>
                </div>
                <div class="message-content">
                    ${messageHTML}
                </div>
            `;
        }
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    formatAIResponse(response) {
        let html = '';
        
        if (response.message) {
            html += `<p class="ai-response-message">${response.message}</p>`;
        }
        
        if (response.details) {
            html += `<div class="ai-response-details">`;
            for (const [key, value] of Object.entries(response.details)) {
                html += `<p><strong>${this.formatKey(key)}:</strong> ${value}</p>`;
            }
            html += `</div>`;
        }
        
        if (response.recommendations) {
            html += `<div class="ai-response-recommendations">`;
            html += `<p><strong>Recommendations:</strong></p>`;
            html += `<ul>`;
            response.recommendations.forEach(rec => {
                html += `<li>${rec}</li>`;
            });
            html += `</ul>`;
            html += `</div>`;
        }
        
        if (response.navigation) {
            html += `<div class="ai-response-navigation">`;
            html += `<p><strong>Navigation:</strong> ${response.navigation}</p>`;
            html += `</div>`;
        }
        
        return html;
    }

    formatKey(key) {
        return key.split('_').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }

    setupSettingsControls() {
        // Settings will be loaded dynamically when settings screen opens
    }

    async loadSettingsUI() {
        const settingsContent = document.getElementById('settingsContent');
        if (!settingsContent) return;
        
        settingsContent.innerHTML = '';
        
        // Get settings from AI Master
        const settingsIndex = this.aiMaster.getNeuralMemory().settingsIndex;
        const gameState = this.aiMaster.getGameState();
        
        // Group settings by category
        const categories = {};
        
        Object.entries(settingsIndex).forEach(([key, setting]) => {
            if (!categories[setting.category]) {
                categories[setting.category] = [];
            }
            categories[setting.category].push({ key, ...setting });
        });
        
        // Create UI for each category
        for (const [category, settings] of Object.entries(categories)) {
            const categorySection = document.createElement('div');
            categorySection.className = 'settings-category';
            categorySection.innerHTML = `
                <h3 class="category-title">${this.formatKey(category)}</h3>
                <div class="category-settings">
                    ${settings.map(setting => this.createSettingControl(setting)).join('')}
                </div>
            `;
            
            settingsContent.appendChild(categorySection);
        }
        
        // Add event listeners to setting controls
        this.setupSettingEventListeners();
    }

    createSettingControl(setting) {
        let controlHTML = '';
        
        switch (setting.controlType) {
            case 'toggle':
                controlHTML = `
                    <div class="setting-item" data-setting="${setting.key}">
                        <div class="setting-info">
                            <span class="setting-label">${this.formatKey(setting.key)}</span>
                            <span class="setting-description">${setting.description}</span>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" ${setting.currentValue ? 'checked' : ''}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                `;
                break;
                
            case 'slider':
                controlHTML = `
                    <div class="setting-item" data-setting="${setting.key}">
                        <div class="setting-info">
                            <span class="setting-label">${this.formatKey(setting.key)}</span>
                            <span class="setting-description">${setting.description}</span>
                            <span class="setting-value">${setting.currentValue || setting.defaultValue}</span>
                        </div>
                        <input type="range" class="setting-slider" 
                               min="0" max="100" 
                               value="${setting.currentValue || setting.defaultValue}">
                    </div>
                `;
                break;
                
            case 'color_picker':
                controlHTML = `
                    <div class="setting-item" data-setting="${setting.key}">
                        <div class="setting-info">
                            <span class="setting-label">${this.formatKey(setting.key)}</span>
                            <span class="setting-description">${setting.description}</span>
                        </div>
                        <input type="color" class="setting-color" 
                               value="${setting.currentValue || setting.defaultValue}">
                    </div>
                `;
                break;
                
            default:
                controlHTML = `
                    <div class="setting-item" data-setting="${setting.key}">
                        <div class="setting-info">
                            <span class="setting-label">${this.formatKey(setting.key)}</span>
                            <span class="setting-description">${setting.description}</span>
                        </div>
                        <span class="setting-display">${setting.currentValue || setting.defaultValue}</span>
                    </div>
                `;
        }
        
        return controlHTML;
    }

    setupSettingEventListeners() {
        // Toggle switches
        document.querySelectorAll('.toggle-switch input').forEach(toggle => {
            toggle.addEventListener('change', (e) => {
                const settingItem = e.target.closest('.setting-item');
                const settingKey = settingItem.dataset.setting;
                const value = e.target.checked;
                
                this.updateSetting(settingKey, value);
            });
        });
        
        // Sliders
        document.querySelectorAll('.setting-slider').forEach(slider => {
            slider.addEventListener('input', (e) => {
                const settingItem = e.target.closest('.setting-item');
                const settingKey = settingItem.dataset.setting;
                const value = e.target.value;
                
                // Update displayed value
                const valueDisplay = settingItem.querySelector('.setting-value');
                if (valueDisplay) {
                    valueDisplay.textContent = value;
                }
                
                this.updateSetting(settingKey, parseFloat(value));
            });
        });
        
        // Color pickers
        document.querySelectorAll('.setting-color').forEach(colorPicker => {
            colorPicker.addEventListener('change', (e) => {
                const settingItem = e.target.closest('.setting-item');
                const settingKey = settingItem.dataset.setting;
                const value = e.target.value;
                
                this.updateSetting(settingKey, value);
            });
        });
    }

    async updateSetting(settingKey, value) {
        try {
            const success = await this.aiMaster.updateSetting(settingKey, value);
            
            if (success) {
                // Update active settings count
                this.updateActiveSettingsCount();
                
                // Show success feedback
                this.showSettingFeedback('Setting updated successfully');
            } else {
                this.showError('Failed to update setting');
            }
        } catch (error) {
            this.showError(error.message);
        }
    }

    updateActiveSettingsCount() {
        const settingsIndex = this.aiMaster.getNeuralMemory().settingsIndex;
        const activeSettings = Object.values(settingsIndex).filter(
            setting => setting.currentValue !== setting.defaultValue
        ).length;
        
        const activeCountElement = document.getElementById('activeSettings');
        if (activeCountElement) {
            activeCountElement.textContent = activeSettings;
        }
    }

    showSettingFeedback(message) {
        // Create feedback element
        const feedback = document.createElement('div');
        feedback.className = 'setting-feedback';
        feedback.textContent = message;
        
        const settingsContent = document.getElementById('settingsContent');
        if (settingsContent) {
            settingsContent.appendChild(feedback);
            
            // Remove after 3 seconds
            setTimeout(() => {
                feedback.remove();
            }, 3000);
        }
    }

    setupAdminControls() {
        // Admin overlay
        const adminOverlay = document.getElementById('adminOverlay');
        const adminClose = document.getElementById('adminClose');
        const userSearch = document.getElementById('userSearch');
        const executeOverride = document.getElementById('executeOverride');
        
        if (!adminOverlay) return;
        
        // Open admin overlay
        document.getElementById('menuAdmin')?.addEventListener('click', () => {
            adminOverlay.classList.add('active');
        });
        
        // Close admin overlay
        if (adminClose) {
            adminClose.addEventListener('click', () => {
                adminOverlay.classList.remove('active');
            });
        }
        
        // User search
        if (userSearch) {
            userSearch.addEventListener('input', async (e) => {
                await this.searchUsers(e.target.value);
            });
        }
        
        // Execute override
        if (executeOverride) {
            executeOverride.addEventListener('click', async () => {
                const username = userSearch.value.trim();
                if (username) {
                    await this.handleAdminAccess();
                }
            });
        }
    }

    async searchUsers(query) {
        const userResults = document.getElementById('userResults');
        if (!userResults) return;
        
        if (!query) {
            userResults.innerHTML = '';
            return;
        }
        
        // In a real app, this would query the backend
        // For now, show a loading message
        userResults.innerHTML = '<p>Searching users...</p>';
        
        // Simulate search delay
        setTimeout(() => {
            // Mock search results
            const mockUsers = [
                { username: 'user1', wealth: 15000 },
                { username: 'user2', wealth: 25000 },
                { username: 'user3', wealth: 5000 }
            ];
            
            const filteredUsers = mockUsers.filter(user => 
                user.username.toLowerCase().includes(query.toLowerCase())
            );
            
            if (filteredUsers.length > 0) {
                userResults.innerHTML = filteredUsers.map(user => `
                    <div class="user-result" data-username="${user.username}">
                        <span class="username">${user.username}</span>
                        <span class="user-wealth">${user.wealth} coins</span>
                    </div>
                `).join('');
                
                // Add click event to user results
                userResults.querySelectorAll('.user-result').forEach(result => {
                    result.addEventListener('click', () => {
                        const username = result.dataset.username;
                        document.getElementById('userSearch').value = username;
                    });
                });
            } else {
                userResults.innerHTML = '<p>No users found</p>';
            }
        }, 500);
    }

    setupWorldInteractions() {
        // World object interactions
        document.querySelectorAll('.world-object').forEach(object => {
            object.addEventListener('click', async () => {
                const objectId = object.dataset.id;
                const objectType = object.dataset.type;
                
                await this.handleWorldObjectInteraction(objectId, objectType);
            });
        });
    }

    async handleWorldObjectInteraction(objectId, objectType) {
        try {
            // Get object info
            const result = await this.aiMaster.interactWithObject(objectId, 'info');
            
            // Show object info modal
            this.showObjectInfo(result.object, result.availableActions);
            
        } catch (error) {
            this.showError(error.message);
        }
    }

    showObjectInfo(object, availableActions) {
        // Create modal for object info
        const modal = document.createElement('div');
        modal.className = 'object-info-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h3>${object.name}</h3>
                <div class="object-details">
                    <p><strong>Type:</strong> ${object.type}</p>
                    <p><strong>Owner:</strong> ${object.owner}</p>
                    <p><strong>Income Generated:</strong> ${object.incomeGenerated || 0} coins</p>
                    ${object.rentalRate ? `<p><strong>Rental Rate:</strong> ${object.rentalRate} coins/hour</p>` : ''}
                    ${object.basePrice ? `<p><strong>Base Price:</strong> ${object.basePrice} coins</p>` : ''}
                </div>
                <div class="object-actions">
                    ${availableActions.map(action => `
                        <button class="object-action" data-action="${action}">
                            ${this.formatKey(action)}
                        </button>
                    `).join('')}
                </div>
                <button class="modal-close">Close</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Add event listeners
        modal.querySelector('.modal-close').addEventListener('click', () => {
            modal.remove();
        });
        
        // Action buttons
        modal.querySelectorAll('.object-action').forEach(button => {
            button.addEventListener('click', async () => {
                const action = button.dataset.action;
                await this.performObjectAction(object.id, action);
                modal.remove();
            });
        });
    }

    async performObjectAction(objectId, action) {
        try {
            this.showLoading(`Performing ${action}...`);
            
            const result = await this.aiMaster.interactWithObject(objectId, action);
            
            if (result.amount) {
                this.showSuccess(`${action} successful! Gained ${result.amount} coins`);
                this.updateWealthDisplay();
            } else {
                this.showSuccess(`${action} completed successfully`);
            }
            
        } catch (error) {
            this.showError(error.message);
        } finally {
            this.hideLoading();
        }
    }

    setupWorldRendering() {
        // Initialize Three.js world renderer
        this.initWorldRenderer();
    }

    initWorldRenderer() {
        const worldView = document.getElementById('worldView');
        if (!worldView) return;
        
        try {
            // Check if Three.js is available
            if (typeof THREE === 'undefined') {
                console.warn('Three.js not loaded, skipping world rendering');
                return;
            }
            
            // Create scene
            const scene = new THREE.Scene();
            
            // Create camera
            const camera = new THREE.PerspectiveCamera(75, worldView.clientWidth / worldView.clientHeight, 0.1, 1000);
            camera.position.z = 5;
            
            // Create renderer
            const renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(worldView.clientWidth, worldView.clientHeight);
            renderer.setClearColor(0xF8F9FA); // Light background
            worldView.appendChild(renderer.domElement);
            
            // Add lighting (light mode appropriate)
            const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.8);
            scene.add(ambientLight);
            
            const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.5);
            directionalLight.position.set(5, 10, 7);
            scene.add(directionalLight);
            
            // Create simple world objects
            this.createWorldObjects(scene);
            
            // Store renderer reference
            this.worldRenderer = {
                scene,
                camera,
                renderer,
                objects: []
            };
            
            // Start animation loop
            this.animateWorld();
            
        } catch (error) {
            console.error('Failed to initialize world renderer:', error);
        }
    }

    createWorldObjects(scene) {
        // Create a simple ground plane
        const groundGeometry = new THREE.PlaneGeometry(10, 10);
        const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x50C878 });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        scene.add(ground);
        
        // Create tree objects
        const treeGeometry = new THREE.ConeGeometry(0.5, 2, 8);
        const treeMaterial = new THREE.MeshLambertMaterial({ color: 0x228B22 });
        
        const tree1 = new THREE.Mesh(treeGeometry, treeMaterial);
        tree1.position.set(-3, 1, -3);
        scene.add(tree1);
        
        const tree2 = new THREE.Mesh(treeGeometry, treeMaterial);
        tree2.position.set(3, 1, -3);
        scene.add(tree2);
        
        // Create shop building
        const shopGeometry = new THREE.BoxGeometry(2, 1.5, 2);
        const shopMaterial = new THREE.MeshLambertMaterial({ color: 0xD4AF37 });
        const shop = new THREE.Mesh(shopGeometry, shopMaterial);
        shop.position.set(0, 0.75, 3);
        scene.add(shop);
        
        // Store references
        this.worldRenderer.objects = [ground, tree1, tree2, shop];
    }

    animateWorld() {
        if (!this.worldRenderer) return;
        
        requestAnimationFrame(() => this.animateWorld());
        
        // Simple rotation animation
        this.worldRenderer.objects.forEach((object, index) => {
            if (index > 0) { // Don't rotate ground
                object.rotation.y += 0.01;
            }
        });
        
        // Render scene
        this.worldRenderer.renderer.render(this.worldRenderer.scene, this.worldRenderer.camera);
    }

    initializeScreens() {
        // Start with splash screen, then auto-transition to auth
        setTimeout(() => {
            showScreen('authScreen');
        }, 4000);
    }

    updateScreenUI(screenId) {
        switch (screenId) {
            case 'dashboardScreen':
                this.updateWealthDisplay();
                this.updateProfileDisplay();
                break;
                
            case 'aiScreen':
                // Ensure AI interface is ready
                break;
                
            case 'settingsScreen':
                this.loadSettingsUI();
                break;
        }
    }

    updateWealthDisplay() {
        const wealthValue = document.getElementById('wealthValue');
        if (wealthValue && this.userState) {
            wealthValue.textContent = this.userState.wealth.toLocaleString();
        }
    }

    updateProfileDisplay() {
        const profileInitial = document.getElementById('profileInitial');
        if (profileInitial && this.userState) {
            profileInitial.textContent = this.userState.username.charAt(0).toUpperCase();
        }
    }

    updateUserUI() {
        this.updateWealthDisplay();
        this.updateProfileDisplay();
        
        // Update any other user-specific UI elements
        const welcomeElement = document.querySelector('.welcome-message');
        if (welcomeElement && this.userState) {
            welcomeElement.textContent = `Welcome, ${this.userState.username}`;
        }
    }

    // ==================== UTILITY FUNCTIONS ====================

    showLoading(message = 'Loading...') {
        // Create loading overlay
        const loading = document.createElement('div');
        loading.className = 'loading-overlay';
        loading.innerHTML = `
            <div class="loading-content">
                <div class="loading-spinner"></div>
                <p>${message}</p>
            </div>
        `;
        
        document.body.appendChild(loading);
        
        // Store reference for removal
        this.currentLoading = loading;
    }

    hideLoading() {
        if (this.currentLoading) {
            this.currentLoading.remove();
            this.currentLoading = null;
        }
    }

    showError(message) {
        this.showNotification(message, 'error');
    }

    showSuccess(message) {
        this.showNotification(message, 'success');
    }

    showNotification(message, type = 'info') {
        // Create notification
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }

    // ==================== FALLBACK SYSTEM ====================

    initializeFallback() {
        console.log('Initializing fallback system...');
        
        // Create minimal functional fallback
        this.setupFallbackEventListeners();
        this.showNotification('Running in fallback mode', 'warning');
    }

    setupFallbackEventListeners() {
        // Basic screen switching
        window.showScreen = (screenId) => {
            document.querySelectorAll('.screen').forEach(screen => {
                screen.classList.remove('active');
            });
            
            const targetScreen = document.getElementById(screenId);
            if (targetScreen) {
                targetScreen.classList.add('active');
            }
        };
        
        // Auto-transition from splash
        setTimeout(() => {
            showScreen('authScreen');
        }, 4000);
    }

    handleInitializationError(error) {
        console.error('Critical initialization error:', error);
        
        // Show error to user
        const errorDisplay = document.createElement('div');
        errorDisplay.className = 'critical-error';
        errorDisplay.innerHTML = `
            <h3>System Initialization Error</h3>
            <p>${error.message}</p>
            <p>Attempting recovery...</p>
        `;
        
        document.body.appendChild(errorDisplay);
        
        // Attempt recovery
        setTimeout(() => {
            errorDisplay.remove();
            this.initializeFallback();
        }, 3000);
    }
}

// Initialize Game Engine
document.addEventListener('DOMContentLoaded', () => {
    window.GAME_ENGINE = new GameEngine();
});