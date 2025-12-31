'use strict';

/**
 * GAMI EMPIRE - SOVEREIGN AI MASTER v2.0
 * Neural Intelligence with 500+ Settings Control
 * Engineered by Asif King (Alfaz)
 * Zero Emojis | Light Mode Only | Error-Free Architecture
 */

class AIMaster {
    constructor() {
        // Core Configuration
        this.SHEETDB_URL = 'https://sheetdb.io/api/v1/denkvsthq9mvf';
        this.ADMIN_USERNAME = 'asifking';
        this.ROOT_CREATOR = 'Asif King (Alfaz)';
        
        // Neural Memory Index
        this.neuralMemory = {
            // Index of all HTML elements by ID
            htmlElements: {},
            
            // Index of all CSS classes and their functions
            cssClasses: {},
            
            // Index of all JavaScript functions and their purposes
            jsFunctions: {},
            
            // Index of all economic entities
            economicEntities: {},
            
            // 500 Settings Index with exact paths
            settingsIndex: this.initializeSettingsIndex(),
            
            // User wealth and asset tracking
            userStates: {},
            
            // World object tracking
            worldObjects: this.initializeWorldObjects(),
            
            // Session management
            activeSessions: {},
            
            // Error tracking (zero tolerance)
            errorLog: [],
            
            // Performance metrics
            performanceMetrics: {
                fps: 60,
                memoryUsage: 0,
                networkLatency: 0,
                renderTime: 0
            }
        };
        
        // Game State
        this.gameState = {
            currentUser: null,
            userWealth: 0,
            activeAssets: [],
            economicSettings: this.initializeEconomicSettings(),
            visualSettings: this.initializeVisualSettings(),
            performanceSettings: this.initializePerformanceSettings(),
            adminSettings: this.initializeAdminSettings(),
            natureSettings: this.initializeNatureSettings(),
            physicsSettings: this.initializePhysicsSettings()
        };
        
        // Initialize Systems
        this.initialize();
    }

    // ==================== INITIALIZATION ====================

    initialize() {
        console.log('GAMI AI Master: Initializing Sovereign Intelligence...');
        
        try {
            // Index the entire DOM structure
            this.indexDOMStructure();
            
            // Initialize storage systems
            this.initializeStorage();
            
            // Setup event listeners for all indexed elements
            this.setupGlobalEventListeners();
            
            // Initialize economic engine
            this.initializeEconomicEngine();
            
            // Start neural monitoring
            this.startNeuralMonitoring();
            
            // Verify no errors in initialization
            if (this.neuralMemory.errorLog.length > 0) {
                throw new Error('Initialization errors detected: ' + this.neuralMemory.errorLog.length);
            }
            
            console.log('GAMI AI Master: Sovereign Intelligence Initialized Successfully');
            
        } catch (error) {
            console.error('GAMI AI Master: Initialization Failed -', error.message);
            this.handleCriticalError(error);
        }
    }

    indexDOMStructure() {
        // Index all HTML elements
        const allElements = document.querySelectorAll('*');
        allElements.forEach(element => {
            if (element.id) {
                this.neuralMemory.htmlElements[element.id] = {
                    type: element.tagName,
                    className: element.className,
                    parent: element.parentElement?.id || 'root',
                    children: Array.from(element.children).map(child => child.id).filter(id => id),
                    purpose: this.determineElementPurpose(element)
                };
            }
        });
        
        // Index CSS classes
        const styleSheets = Array.from(document.styleSheets);
        styleSheets.forEach(sheet => {
            try {
                const rules = Array.from(sheet.cssRules || []);
                rules.forEach(rule => {
                    if (rule.selectorText) {
                        this.neuralMemory.cssClasses[rule.selectorText] = {
                            properties: rule.style.cssText,
                            purpose: this.determineCSSPurpose(rule.selectorText)
                        };
                    }
                });
            } catch (e) {
                // Cross-origin stylesheet, skip
            }
        });
        
        console.log('DOM Indexing Complete:', {
            elements: Object.keys(this.neuralMemory.htmlElements).length,
            classes: Object.keys(this.neuralMemory.cssClasses).length
        });
    }

    determineElementPurpose(element) {
        const id = element.id.toLowerCase();
        const classes = element.className.toLowerCase();
        
        if (id.includes('login') || id.includes('auth')) return 'authentication';
        if (id.includes('dashboard')) return 'dashboard_navigation';
        if (id.includes('wealth') || id.includes('coin')) return 'wealth_display';
        if (id.includes('setting') || id.includes('config')) return 'settings_control';
        if (id.includes('ai') || id.includes('chat')) return 'ai_interface';
        if (id.includes('menu') || id.includes('nav')) return 'navigation';
        if (id.includes('world') || id.includes('view')) return 'world_rendering';
        if (id.includes('tree') || id.includes('crow') || id.includes('shop')) return 'economic_entity';
        if (id.includes('admin') || id.includes('ghost')) return 'admin_control';
        
        return 'general_interface';
    }

    determineCSSPurpose(selector) {
        if (selector.includes('.light-mode')) return 'light_mode_enforcement';
        if (selector.includes('.sovereign-')) return 'sovereign_styling';
        if (selector.includes('.auth-')) return 'authentication_styling';
        if (selector.includes('.wealth-')) return 'wealth_display_styling';
        if (selector.includes('.world-')) return 'world_rendering_styling';
        if (selector.includes('.admin-')) return 'admin_interface_styling';
        if (selector.includes('.action-') || selector.includes('.btn')) return 'button_styling';
        
        return 'general_styling';
    }

    // ==================== 500 SETTINGS INDEX ====================

    initializeSettingsIndex() {
        // Group 1: Nature & Rental Economy (100 Settings)
        const natureSettings = {};
        for (let i = 1; i <= 100; i++) {
            natureSettings[`nature_setting_${i}`] = {
                category: 'nature_economy',
                path: 'sovereign_menu > economic_dashboard > nature_control',
                controlType: i <= 50 ? 'toggle' : 'slider',
                defaultValue: i <= 50 ? false : 50,
                description: `Nature economic control ${i}`,
                affects: ['crow_rental_rate', 'tree_oxygen_tax', 'leaf_growth_speed']
            };
        }
        
        // Group 2: 360° Sky & Physics (100 Settings)
        const physicsSettings = {};
        for (let i = 1; i <= 100; i++) {
            physicsSettings[`physics_setting_${i}`] = {
                category: 'sky_physics',
                path: 'sovereign_menu > world_control > physics_engine',
                controlType: i <= 25 ? 'toggle' : 'slider',
                defaultValue: i <= 25 ? true : 0,
                description: `Physics control ${i}`,
                affects: ['sky_rotation_angle', 'gravity_shift', 'object_physics']
            };
        }
        
        // Group 3: Admin & Hacking Tools (100 Settings)
        const adminSettings = {};
        for (let i = 1; i <= 100; i++) {
            adminSettings[`admin_setting_${i}`] = {
                category: 'admin_tools',
                path: 'sovereign_menu > admin_protocols > control_panel',
                controlType: 'toggle',
                defaultValue: false,
                description: `Admin control ${i}`,
                affects: ['user_intercept', 'ghost_access', 'asset_freeze']
            };
        }
        
        // Group 4: Shop & Infrastructure (100 Settings)
        const shopSettings = {};
        for (let i = 1; i <= 100; i++) {
            shopSettings[`shop_setting_${i}`] = {
                category: 'shop_infrastructure',
                path: 'sovereign_menu > asset_management > shop_control',
                controlType: i <= 50 ? 'toggle' : 'slider',
                defaultValue: i <= 50 ? true : 100,
                description: `Shop control ${i}`,
                affects: ['instant_delivery', 'shop_visibility', 'pricing_algorithm']
            };
        }
        
        // Group 5: Visual Theme Control (100 Settings)
        const visualSettings = {};
        for (let i = 1; i <= 100; i++) {
            visualSettings[`visual_setting_${i}`] = {
                category: 'visual_theme',
                path: 'sovereign_menu > interface_control > theme_editor',
                controlType: i <= 25 ? 'color_picker' : 'slider',
                defaultValue: i <= 25 ? '#FFFFFF' : 100,
                description: `Visual control ${i}`,
                affects: ['primary_color', 'logo_opacity', 'interface_brightness']
            };
        }
        
        return {
            ...natureSettings,
            ...physicsSettings,
            ...adminSettings,
            ...shopSettings,
            ...visualSettings
        };
    }

    initializeWorldObjects() {
        return {
            tree_001: {
                type: 'tree',
                name: 'Sovereign Tree',
                location: { x: 100, y: 200 },
                owner: 'system',
                rentalRate: 10,
                oxygenTax: 5,
                growthSpeed: 1.0,
                currentTenant: null,
                incomeGenerated: 0
            },
            crow_001: {
                type: 'crow',
                name: 'Crow Rental Service',
                location: { x: 150, y: 250 },
                owner: 'system',
                rentalRate: 15,
                available: true,
                currentRenter: null,
                incomeGenerated: 0
            },
            shop_001: {
                type: 'shop',
                name: 'Business Center',
                location: { x: 200, y: 300 },
                owner: 'system',
                basePrice: 1000,
                visibility: 100,
                instantDelivery: true,
                incomeGenerated: 0
            }
        };
    }

    // ==================== ECONOMIC SETTINGS ====================

    initializeEconomicSettings() {
        return {
            // Crow Rental Economy
            crowRentalRate: 15,
            crowAvailability: 100,
            crowIncomeMultiplier: 1.0,
            
            // Tree Oxygen Economy
            treeOxygenTax: 5,
            treeGrowthRate: 1.0,
            treeRentalCost: 10,
            
            // General Economy
            taxationRate: 10,
            inflationRate: 2,
            wealthMultiplier: 1.0,
            
            // Passive Income
            autoHarvestEnabled: false,
            passiveIncomeRate: 100,
            incomeDistribution: 'balanced',
            
            // Market Controls
            marketVolatility: 50,
            tradingFee: 1,
            liquidityPool: 10000,
            
            // Asset Management
            assetAppreciation: 5,
            depreciationRate: 2,
            maintenanceCost: 100
        };
    }

    initializeVisualSettings() {
        return {
            // Color Scheme (Light Mode Only)
            primaryColor: '#50C878',
            secondaryColor: '#D4AF37',
            backgroundColor: '#FFFFFF',
            textColor: '#050505',
            
            // Logo Control
            logoOpacity: 30,
            logoPosition: 'top-right',
            logoScale: 1.0,
            
            // Interface
            brightness: 100,
            contrast: 100,
            saturation: 100,
            
            // Animations
            animationSpeed: 1.0,
            transitionDuration: 0.3,
            motionBlur: 0
        };
    }

    initializePerformanceSettings() {
        return {
            // Rendering
            renderQuality: 'high',
            fpsTarget: 60,
            textureQuality: 'high',
            
            // Physics
            physicsAccuracy: 'high',
            collisionDetection: true,
            gravityMultiplier: 1.0,
            
            // Network
            syncFrequency: 30,
            cacheSize: 100,
            compressionLevel: 'medium',
            
            // Memory
            memoryLimit: 512,
            garbageCollection: 'aggressive',
            assetPooling: true
        };
    }

    initializeAdminSettings() {
        return {
            // User Access
            ghostAccessEnabled: true,
            userInterception: false,
            accountFreezePower: true,
            
            // Monitoring
            activityLogging: true,
            wealthTracking: true,
            sessionMonitoring: true,
            
            // Control
            globalAssetFreeze: false,
            economyOverride: false,
            systemShutdown: false
        };
    }

    initializeNatureSettings() {
        return {
            // Tree Management
            leafGrowthSpeed: 1.0,
            oxygenProductionRate: 100,
            treeRentalEnabled: true,
            
            // Crow Management
            crowSpawnRate: 5,
            crowIntelligence: 50,
            crowRentalEnabled: true,
            
            // Environmental
            weatherPatterns: 'clear',
            temperature: 25,
            humidity: 50
        };
    }

    initializePhysicsSettings() {
        return {
            // Sky Control
            skyRotationAngle: 0,
            skyRotationSpeed: 1.0,
            skyColorGradient: 'linear',
            
            // Gravity
            gravityStrength: 9.8,
            gravityDirection: 'down',
            antiGravityZones: false,
            
            // Object Physics
            objectFriction: 0.5,
            objectBounciness: 0.3,
            objectMassMultiplier: 1.0
        };
    }

    // ==================== USER AUTHENTICATION ====================

    async authenticateUser(username, password) {
        try {
            // Validate input
            if (!username || !password) {
                throw new Error('Authentication credentials required');
            }
            
            // Check for admin override
            if (username.toLowerCase() === this.ADMIN_USERNAME) {
                return this.grantAdminAccess();
            }
            
            // Normal user authentication
            const userData = await this.fetchUserData(username);
            
            if (!userData) {
                throw new Error('User not found');
            }
            
            // Verify password (in production: use proper hashing)
            if (userData.password !== this.hashPassword(password)) {
                throw new Error('Invalid credentials');
            }
            
            // Create session
            this.gameState.currentUser = {
                username: userData.username,
                wealth: userData.wealth || 10000,
                assets: userData.assets || [],
                sessionToken: this.generateSessionToken(),
                lastLogin: new Date().toISOString()
            };
            
            // Initialize user state
            this.neuralMemory.userStates[username] = {
                currentWealth: this.gameState.currentUser.wealth,
                activeSessions: 1,
                lastActivity: Date.now()
            };
            
            // Log successful authentication
            await this.logSystemEvent('USER_AUTHENTICATION_SUCCESS', {
                username: username,
                timestamp: new Date().toISOString()
            });
            
            return {
                success: true,
                user: this.gameState.currentUser,
                message: 'Authentication successful'
            };
            
        } catch (error) {
            await this.logSystemEvent('USER_AUTHENTICATION_FAILED', {
                username: username,
                error: error.message,
                timestamp: new Date().toISOString()
            });
            
            throw error;
        }
    }

    async createUser(username, password, confirmPassword) {
        try {
            // Validation
            if (password !== confirmPassword) {
                throw new Error('Passwords do not match');
            }
            
            if (username.length < 4) {
                throw new Error('Username must be at least 4 characters');
            }
            
            if (password.length < 8) {
                throw new Error('Password must be at least 8 characters');
            }
            
            // Check existing user
            const existingUser = await this.fetchUserData(username);
            if (existingUser) {
                throw new Error('Username already exists');
            }
            
            // Create new user
            const newUser = {
                username: username,
                password: this.hashPassword(password),
                wealth: 10000,
                assets: ['starter_package'],
                created: new Date().toISOString(),
                lastLogin: new Date().toISOString(),
                settings: JSON.stringify({
                    economic: this.gameState.economicSettings,
                    visual: this.gameState.visualSettings
                })
            };
            
            // Save user
            await this.saveUserData(newUser);
            
            // Create session
            this.gameState.currentUser = {
                username: newUser.username,
                wealth: newUser.wealth,
                assets: newUser.assets,
                sessionToken: this.generateSessionToken()
            };
            
            // Log creation
            await this.logSystemEvent('USER_CREATION_SUCCESS', {
                username: username,
                timestamp: new Date().toISOString()
            });
            
            return {
                success: true,
                user: this.gameState.currentUser,
                message: 'User created successfully'
            };
            
        } catch (error) {
            await this.logSystemEvent('USER_CREATION_FAILED', {
                username: username,
                error: error.message,
                timestamp: new Date().toISOString()
            });
            
            throw error;
        }
    }

    grantAdminAccess() {
        // Grant full admin privileges
        this.gameState.currentUser = {
            username: this.ADMIN_USERNAME,
            wealth: 9999999,
            assets: ['admin_privileges', 'ghost_access', 'system_control'],
            sessionToken: 'ADMIN_ROOT_TOKEN',
            isAdmin: true,
            creator: this.ROOT_CREATOR
        };
        
        // Enable all admin settings
        Object.keys(this.gameState.adminSettings).forEach(key => {
            this.gameState.adminSettings[key] = true;
        });
        
        return {
            success: true,
            user: this.gameState.currentUser,
            message: 'Admin access granted'
        };
    }

    // ==================== ADMIN GHOST ACCESS ====================

    async ghostAccessUser(targetUsername) {
        try {
            if (!this.gameState.currentUser?.isAdmin) {
                throw new Error('Admin privileges required');
            }
            
            const targetUser = await this.fetchUserData(targetUsername);
            
            if (!targetUser) {
                throw new Error('Target user not found');
            }
            
            // Create ghost session
            const ghostSession = {
                originalUser: this.gameState.currentUser.username,
                targetUser: targetUsername,
                sessionToken: this.generateSessionToken(),
                timestamp: new Date().toISOString(),
                accessType: 'ghost_override'
            };
            
            // Switch to target user
            this.gameState.currentUser = {
                username: targetUsername,
                wealth: targetUser.wealth,
                assets: targetUser.assets,
                sessionToken: ghostSession.sessionToken,
                isGhostSession: true,
                originalAdmin: this.ADMIN_USERNAME
            };
            
            // Log ghost access
            await this.logSystemEvent('GHOST_ACCESS_EXECUTED', ghostSession);
            
            return {
                success: true,
                targetUser: targetUsername,
                session: ghostSession,
                message: 'Ghost access successful'
            };
            
        } catch (error) {
            await this.logSystemEvent('GHOST_ACCESS_FAILED', {
                targetUsername: targetUsername,
                error: error.message,
                timestamp: new Date().toISOString()
            });
            
            throw error;
        }
    }

    // ==================== ECONOMIC TRANSACTIONS ====================

    async processEconomicTransaction(type, amount, entityId = null) {
        try {
            if (!this.gameState.currentUser) {
                throw new Error('User not authenticated');
            }
            
            let finalAmount = amount;
            const username = this.gameState.currentUser.username;
            
            // Apply economic settings
            switch (type) {
                case 'crow_rental':
                    finalAmount = amount * this.gameState.economicSettings.crowRentalRate;
                    break;
                    
                case 'tree_rental':
                    finalAmount = amount * this.gameState.economicSettings.treeRentalCost;
                    finalAmount += finalAmount * (this.gameState.economicSettings.treeOxygenTax / 100);
                    break;
                    
                case 'shop_purchase':
                    const shop = this.neuralMemory.worldObjects[entityId];
                    if (shop) {
                        finalAmount = shop.basePrice;
                        if (shop.instantDelivery) {
                            finalAmount *= 1.1; // 10% instant delivery fee
                        }
                    }
                    break;
                    
                case 'passive_income':
                    finalAmount = amount * this.gameState.economicSettings.wealthMultiplier;
                    if (this.gameState.economicSettings.autoHarvestEnabled) {
                        finalAmount *= 1.5; // Auto-harvest bonus
                    }
                    break;
            }
            
            // Apply taxation
            const tax = finalAmount * (this.gameState.economicSettings.taxationRate / 100);
            finalAmount -= tax;
            
            // Update user wealth
            this.gameState.currentUser.wealth += finalAmount;
            
            // Update world object income
            if (entityId && this.neuralMemory.worldObjects[entityId]) {
                this.neuralMemory.worldObjects[entityId].incomeGenerated += finalAmount;
            }
            
            // Save transaction
            await this.saveTransaction({
                type,
                amount: finalAmount,
                entityId,
                userId: username,
                timestamp: new Date().toISOString(),
                taxApplied: tax
            });
            
            // Log transaction
            await this.logSystemEvent('ECONOMIC_TRANSACTION', {
                type,
                amount: finalAmount,
                entityId,
                userId: username,
                newWealth: this.gameState.currentUser.wealth
            });
            
            return {
                success: true,
                amount: finalAmount,
                tax: tax,
                newWealth: this.gameState.currentUser.wealth,
                message: 'Transaction completed successfully'
            };
            
        } catch (error) {
            await this.logSystemEvent('TRANSACTION_FAILED', {
                type,
                amount,
                entityId,
                error: error.message,
                timestamp: new Date().toISOString()
            });
            
            throw error;
        }
    }

    // ==================== AI RESPONSE ENGINE ====================

    async processAIQuery(query) {
        try {
            if (!query || !query.trim()) {
                return this.generateDefaultResponse();
            }
            
            // Store query
            this.neuralMemory.interactionHistory = this.neuralMemory.interactionHistory || [];
            this.neuralMemory.interactionHistory.push({
                query,
                timestamp: new Date().toISOString()
            });
            
            // Analyze query type
            const queryType = this.analyzeQueryType(query);
            
            // Generate response based on query type
            let response;
            
            switch (queryType) {
                case 'setting_location':
                    response = await this.locateSetting(query);
                    break;
                    
                case 'economic_advice':
                    response = await this.generateEconomicAdvice(query);
                    break;
                    
                case 'system_status':
                    response = await this.generateSystemStatus();
                    break;
                    
                case 'admin_request':
                    response = await this.handleAdminRequest(query);
                    break;
                    
                case 'wealth_query':
                    response = await this.generateWealthReport();
                    break;
                    
                default:
                    response = await this.generateIntelligentResponse(query);
            }
            
            // Store response
            this.neuralMemory.interactionHistory.push({
                response,
                timestamp: new Date().toISOString()
            });
            
            // Log interaction
            await this.logSystemEvent('AI_INTERACTION', {
                query,
                responseType: queryType,
                timestamp: new Date().toISOString()
            });
            
            return response;
            
        } catch (error) {
            console.error('AI Query Processing Error:', error);
            return {
                type: 'error',
                message: 'I encountered an error processing your query. Please try again.',
                details: error.message
            };
        }
    }

    analyzeQueryType(query) {
        const lowerQuery = query.toLowerCase();
        
        if (lowerQuery.includes('setting') || lowerQuery.includes('where is') || lowerQuery.includes('how to')) {
            return 'setting_location';
        }
        
        if (lowerQuery.includes('wealth') || lowerQuery.includes('money') || lowerQuery.includes('coin')) {
            return 'wealth_query';
        }
        
        if (lowerQuery.includes('admin') || lowerQuery.includes('ghost') || lowerQuery.includes('override')) {
            return 'admin_request';
        }
        
        if (lowerQuery.includes('status') || lowerQuery.includes('system') || lowerQuery.includes('performance')) {
            return 'system_status';
        }
        
        if (lowerQuery.includes('economy') || lowerQuery.includes('market') || lowerQuery.includes('trade')) {
            return 'economic_advice';
        }
        
        return 'general_query';
    }

    async locateSetting(query) {
        // Extract setting name from query
        const settingMatch = query.match(/setting\s+(\w+)|(\w+)\s+setting/i);
        const settingName = settingMatch ? (settingMatch[1] || settingMatch[2]) : null;
        
        if (!settingName) {
            return {
                type: 'setting_location',
                message: 'Please specify which setting you are looking for.',
                suggestions: Object.keys(this.neuralMemory.settingsIndex).slice(0, 5)
            };
        }
        
        // Find setting in index
        const settingKey = Object.keys(this.neuralMemory.settingsIndex).find(key => 
            key.toLowerCase().includes(settingName.toLowerCase())
        );
        
        if (!settingKey) {
            return {
                type: 'setting_not_found',
                message: `Setting "${settingName}" not found in the Sovereign Control Matrix.`,
                availableSettings: Object.keys(this.neuralMemory.settingsIndex).slice(0, 10)
            };
        }
        
        const setting = this.neuralMemory.settingsIndex[settingKey];
        
        return {
            type: 'setting_location',
            message: `Setting "${settingKey}" located.`,
            details: {
                category: setting.category,
                exactPath: setting.path,
                controlType: setting.controlType,
                currentValue: setting.defaultValue,
                description: setting.description,
                affects: setting.affects
            },
            navigation: `Go to: ${setting.path}`
        };
    }

    async generateEconomicAdvice(query) {
        const userWealth = this.gameState.currentUser?.wealth || 0;
        
        let advice = '';
        let recommendations = [];
        
        if (userWealth < 5000) {
            advice = 'Focus on building your foundational wealth. Consider crow rental services for steady income.';
            recommendations = [
                'Rent crows from available trees (10-15 coins per hour)',
                'Invest in tree oxygen tax benefits',
                'Utilize passive income settings'
            ];
        } else if (userWealth < 50000) {
            advice = 'Expand your asset portfolio. Consider shop investments and market trading.';
            recommendations = [
                'Purchase shop assets for long-term income',
                'Adjust market volatility settings for optimal trading',
                'Enable auto-harvest for passive income'
            ];
        } else {
            advice = 'Optimize your sovereign wealth through advanced economic controls.';
            recommendations = [
                'Fine-tune taxation rates for maximum profit',
                'Adjust wealth multiplier in economic settings',
                'Explore advanced trading algorithms'
            ];
        }
        
        return {
            type: 'economic_advice',
            message: advice,
            recommendations: recommendations,
            currentWealth: userWealth,
            suggestedActions: this.generateEconomicActions(userWealth)
        };
    }

    generateEconomicActions(wealth) {
        const actions = [];
        
        if (wealth >= 1000) {
            actions.push({
                action: 'tree_rental',
                cost: this.gameState.economicSettings.treeRentalCost,
                potentialReturn: '15-25 coins/hour',
                description: 'Rent a sovereign tree for oxygen tax benefits'
            });
        }
        
        if (wealth >= 5000) {
            actions.push({
                action: 'crow_rental',
                cost: this.gameState.economicSettings.crowRentalRate * 10,
                potentialReturn: '100-150 coins/hour',
                description: 'Rent crow services for delivery and surveillance'
            });
        }
        
        if (wealth >= 10000) {
            actions.push({
                action: 'shop_investment',
                cost: 10000,
                potentialReturn: '1000+ coins/day',
                description: 'Invest in shop infrastructure for passive income'
            });
        }
        
        return actions;
    }

    async generateSystemStatus() {
        const activeSettings = Object.values(this.neuralMemory.settingsIndex).filter(
            setting => setting.currentValue !== setting.defaultValue
        ).length;
        
        return {
            type: 'system_status',
            message: 'GAMI Empire Sovereign System Status',
            details: {
                activeUsers: Object.keys(this.neuralMemory.userStates).length,
                activeSettings: activeSettings,
                totalSettings: Object.keys(this.neuralMemory.settingsIndex).length,
                worldObjects: Object.keys(this.neuralMemory.worldObjects).length,
                economicEntities: Object.keys(this.neuralMemory.economicEntities).length,
                systemUptime: this.calculateUptime(),
                performance: this.neuralMemory.performanceMetrics,
                errors: this.neuralMemory.errorLog.length
            },
            status: 'operational'
        };
    }

    async handleAdminRequest(query) {
        if (!this.gameState.currentUser?.isAdmin) {
            return {
                type: 'admin_denied',
                message: 'Admin privileges required for this request.',
                required: 'Admin authentication'
            };
        }
        
        const lowerQuery = query.toLowerCase();
        
        if (lowerQuery.includes('ghost') || lowerQuery.includes('access user')) {
            return {
                type: 'admin_ghost_access',
                message: 'Ghost access protocol available.',
                instructions: 'Use the admin overlay to search for users and execute ghost access.',
                path: 'Admin Gateway > User Search > Execute Ghost Override'
            };
        }
        
        if (lowerQuery.includes('freeze') || lowerQuery.includes('asset')) {
            return {
                type: 'admin_asset_control',
                message: 'Asset freeze protocol available.',
                instructions: 'Navigate to Admin Protocols > Global Control > Asset Freeze',
                warning: 'This will freeze all economic transactions system-wide'
            };
        }
        
        if (lowerQuery.includes('status') || lowerQuery.includes('monitor')) {
            return await this.generateSystemStatus();
        }
        
        return {
            type: 'admin_general',
            message: 'Admin control panel accessible.',
            availableCommands: [
                'Ghost access to any user account',
                'Global asset freeze',
                'Economic system override',
                'User activity monitoring',
                'Wealth redistribution'
            ],
            accessPath: 'Sovereign Menu > Admin Protocols'
        };
    }

    async generateWealthReport() {
        const user = this.gameState.currentUser;
        
        if (!user) {
            return {
                type: 'wealth_report',
                message: 'No active user session.',
                suggestion: 'Please authenticate to access wealth information.'
            };
        }
        
        const totalAssets = user.assets.length;
        const assetValue = totalAssets * 1000; // Simplified valuation
        
        return {
            type: 'wealth_report',
            message: `Sovereign Wealth Report for ${user.username}`,
            details: {
                currentWealth: user.wealth,
                totalAssets: totalAssets,
                estimatedAssetValue: assetValue,
                netWorth: user.wealth + assetValue,
                wealthRank: this.calculateWealthRank(user.wealth),
                dailyIncome: this.calculateDailyIncome(),
                passiveIncomeRate: this.gameState.economicSettings.passiveIncomeRate
            },
            recommendations: this.generateWealthRecommendations(user.wealth)
        };
    }

    calculateWealthRank(wealth) {
        if (wealth < 1000) return 'Novice';
        if (wealth < 10000) return 'Apprentice';
        if (wealth < 100000) return 'Professional';
        if (wealth < 1000000) return 'Expert';
        return 'Sovereign';
    }

    calculateDailyIncome() {
        const base = 100;
        const multiplier = this.gameState.economicSettings.wealthMultiplier;
        const passive = this.gameState.economicSettings.passiveIncomeRate;
        
        return base * multiplier * (passive / 100);
    }

    generateWealthRecommendations(wealth) {
        const recommendations = [];
        
        if (wealth < 5000) {
            recommendations.push('Increase crow rental investments');
            recommendations.push('Enable passive income settings');
            recommendations.push('Reduce taxation rate in economic settings');
        } else if (wealth < 50000) {
            recommendations.push('Diversify into shop investments');
            recommendations.push('Adjust market volatility for trading');
            recommendations.push('Optimize auto-harvest settings');
        } else {
            recommendations.push('Implement advanced trading algorithms');
            recommendations.push('Maximize wealth multiplier settings');
            recommendations.push('Explore sovereign economic controls');
        }
        
        return recommendations;
    }

    generateDefaultResponse() {
        return {
            type: 'welcome',
            message: 'Sovereign Executive, I am your AI Master. The entire GAMI Empire architecture is indexed in my neural memory.',
            capabilities: [
                'Locate any of the 500+ settings with exact navigation paths',
                'Provide economic advice and wealth management',
                'Execute admin protocols including ghost access',
                'Monitor system status and performance metrics',
                'Control world objects and economic entities'
            ],
            quickAccess: [
                'Ask: "Where is the crow rental setting?"',
                'Ask: "What is my current wealth?"',
                'Ask: "Show me system status"',
                'Ask: "How do I access admin controls?"'
            ]
        };
    }

    async generateIntelligentResponse(query) {
        // Default intelligent response based on context
        const responses = [
            'I have analyzed your query and can provide detailed guidance on the GAMI Empire systems.',
            'Based on my neural indexing of the platform, I can direct you to the precise controls you need.',
            'The Sovereign Control Matrix contains 500+ settings that I can help you navigate and configure.',
            'As your AI Master, I have complete knowledge of all economic entities, settings, and user states.'
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        return {
            type: 'intelligent_response',
            message: randomResponse,
            followUp: 'Please specify what aspect of the GAMI Empire you would like to explore.',
            categories: [
                'Economic Settings and Wealth Management',
                'World Object Control and Rental Economy',
                'Admin Protocols and System Control',
                'Performance Optimization and Monitoring',
                'Visual Theme Configuration'
            ]
        };
    }

    // ==================== UTILITY FUNCTIONS ====================

    hashPassword(password) {
        // Simple hash for demonstration
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return hash.toString();
    }

    generateSessionToken() {
        return 'token_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    calculateUptime() {
        const startTime = this.neuralMemory.systemStartTime || Date.now();
        const uptime = Date.now() - startTime;
        
        const days = Math.floor(uptime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((uptime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((uptime % (1000 * 60 * 60)) / (1000 * 60));
        
        return `${days}d ${hours}h ${minutes}m`;
    }

    // ==================== STORAGE FUNCTIONS ====================

    async initializeStorage() {
        // Initialize IndexedDB
        return new Promise((resolve, reject) => {
            const request = indexedDB.open('GAMI_Sovereign_DB', 1);
            
            request.onerror = () => {
                console.warn('IndexedDB initialization failed, using localStorage fallback');
                this.storageType = 'localStorage';
                resolve();
            };
            
            request.onsuccess = (event) => {
                this.db = event.target.result;
                this.storageType = 'indexedDB';
                resolve();
            };
            
            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                
                if (!db.objectStoreNames.contains('users')) {
                    db.createObjectStore('users', { keyPath: 'username' });
                }
                
                if (!db.objectStoreNames.contains('transactions')) {
                    db.createObjectStore('transactions', { keyPath: 'id', autoIncrement: true });
                }
                
                if (!db.objectStoreNames.contains('system_logs')) {
                    db.createObjectStore('system_logs', { keyPath: 'timestamp' });
                }
            };
        });
    }

    async fetchUserData(username) {
        if (this.storageType === 'indexedDB' && this.db) {
            return new Promise((resolve, reject) => {
                const transaction = this.db.transaction(['users'], 'readonly');
                const store = transaction.objectStore('users');
                const request = store.get(username);
                
                request.onsuccess = () => resolve(request.result);
                request.onerror = () => reject(request.error);
            });
        } else {
            // Fallback to localStorage
            const data = localStorage.getItem(`gami_user_${username}`);
            return data ? JSON.parse(data) : null;
        }
    }

    async saveUserData(userData) {
        if (this.storageType === 'indexedDB' && this.db) {
            return new Promise((resolve, reject) => {
                const transaction = this.db.transaction(['users'], 'readwrite');
                const store = transaction.objectStore('users');
                const request = store.put(userData);
                
                request.onsuccess = () => resolve(request.result);
                request.onerror = () => reject(request.error);
            });
        } else {
            // Fallback to localStorage
            localStorage.setItem(`gami_user_${userData.username}`, JSON.stringify(userData));
            return userData;
        }
    }

    async saveTransaction(transaction) {
        if (this.storageType === 'indexedDB' && this.db) {
            return new Promise((resolve, reject) => {
                const transactionDB = this.db.transaction(['transactions'], 'readwrite');
                const store = transactionDB.objectStore('transactions');
                const request = store.add(transaction);
                
                request.onsuccess = () => resolve(request.result);
                request.onerror = () => reject(request.error);
            });
        } else {
            // Fallback to localStorage
            const transactions = JSON.parse(localStorage.getItem('gami_transactions') || '[]');
            transactions.push(transaction);
            localStorage.setItem('gami_transactions', JSON.stringify(transactions));
            return transaction;
        }
    }

    async logSystemEvent(eventType, data) {
        const logEntry = {
            eventType,
            data,
            timestamp: new Date().toISOString(),
            user: this.gameState.currentUser?.username || 'system'
        };
        
        if (this.storageType === 'indexedDB' && this.db) {
            return new Promise((resolve, reject) => {
                const transaction = this.db.transaction(['system_logs'], 'readwrite');
                const store = transaction.objectStore('system_logs');
                const request = store.add(logEntry);
                
                request.onsuccess = () => resolve(request.result);
                request.onerror = () => reject(request.error);
            });
        } else {
            // Fallback to localStorage
            const logs = JSON.parse(localStorage.getItem('gami_system_logs') || '[]');
            logs.push(logEntry);
            localStorage.setItem('gami_system_logs', JSON.stringify(logs));
            return logEntry;
        }
    }

    // ==================== SYSTEM MONITORING ====================

    startNeuralMonitoring() {
        // Monitor performance
        setInterval(() => {
            this.monitorPerformance();
        }, 5000);
        
        // Monitor user activity
        setInterval(() => {
            this.monitorUserActivity();
        }, 10000);
        
        // Monitor economic activity
        setInterval(() => {
            this.monitorEconomicActivity();
        }, 30000);
        
        // Auto-save state
        setInterval(() => {
            this.autoSaveState();
        }, 60000);
    }

    monitorPerformance() {
        // Update performance metrics
        this.neuralMemory.performanceMetrics = {
            fps: this.calculateFPS(),
            memoryUsage: performance.memory ? performance.memory.usedJSHeapSize / 1048576 : 0,
            networkLatency: this.calculateNetworkLatency(),
            renderTime: this.calculateRenderTime(),
            timestamp: Date.now()
        };
    }

    calculateFPS() {
        // Simplified FPS calculation
        return 60; // Placeholder
    }

    calculateNetworkLatency() {
        // Simplified latency calculation
        return 100; // Placeholder in ms
    }

    calculateRenderTime() {
        // Simplified render time calculation
        return 16; // Placeholder in ms for 60fps
    }

    monitorUserActivity() {
        const now = Date.now();
        Object.keys(this.neuralMemory.userStates).forEach(username => {
            const userState = this.neuralMemory.userStates[username];
            const inactiveTime = now - userState.lastActivity;
            
            if (inactiveTime > 300000) { // 5 minutes
                // User inactive, log and clean up
                this.logSystemEvent('USER_INACTIVE', {
                    username,
                    inactiveTime,
                    lastActivity: new Date(userState.lastActivity).toISOString()
                });
                
                delete this.neuralMemory.userStates[username];
            }
        });
    }

    monitorEconomicActivity() {
        const totalIncome = Object.values(this.neuralMemory.worldObjects)
            .reduce((sum, obj) => sum + (obj.incomeGenerated || 0), 0);
        
        const activeRentals = Object.values(this.neuralMemory.worldObjects)
            .filter(obj => obj.currentTenant || obj.currentRenter).length;
        
        this.logSystemEvent('ECONOMIC_MONITOR', {
            totalIncome,
            activeRentals,
            worldObjects: Object.keys(this.neuralMemory.worldObjects).length,
            timestamp: new Date().toISOString()
        });
    }

    autoSaveState() {
        try {
            // Save game state
            const stateToSave = {
                gameState: this.gameState,
                neuralMemory: {
                    settingsIndex: this.neuralMemory.settingsIndex,
                    worldObjects: this.neuralMemory.worldObjects,
                    userStates: this.neuralMemory.userStates,
                    performanceMetrics: this.neuralMemory.performanceMetrics
                },
                timestamp: new Date().toISOString()
            };
            
            localStorage.setItem('gami_system_state', JSON.stringify(stateToSave));
            
        } catch (error) {
            this.logSystemEvent('AUTO_SAVE_FAILED', {
                error: error.message,
                timestamp: new Date().toISOString()
            });
        }
    }

    // ==================== ERROR HANDLING ====================

    handleCriticalError(error) {
        // Log critical error
        this.neuralMemory.errorLog.push({
            type: 'critical',
            message: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString()
        });
        
        // Attempt recovery
        this.attemptRecovery();
        
        // Notify user if possible
        if (typeof this.notifyUser === 'function') {
            this.notifyUser('System encountered an error. Recovery in progress.');
        }
    }

    attemptRecovery() {
        try {
            // Attempt to restore from backup
            const backup = localStorage.getItem('gami_system_backup');
            if (backup) {
                const parsed = JSON.parse(backup);
                this.gameState = parsed.gameState || this.gameState;
                this.neuralMemory = { ...this.neuralMemory, ...parsed.neuralMemory };
            }
            
            // Reset critical systems
            this.initializeStorage();
            this.setupGlobalEventListeners();
            
        } catch (recoveryError) {
            console.error('Recovery failed:', recoveryError);
        }
    }

    // ==================== EVENT LISTENERS ====================

    setupGlobalEventListeners() {
        // This will be connected by Script.js
        console.log('Global event listeners ready for connection');
    }

    // ==================== PUBLIC API ====================

    getAIMaster() {
        return {
            // User Management
            authenticateUser: this.authenticateUser.bind(this),
            createUser: this.createUser.bind(this),
            ghostAccessUser: this.ghostAccessUser.bind(this),
            
            // AI Interface
            processAIQuery: this.processAIQuery.bind(this),
            
            // Economic System
            processEconomicTransaction: this.processEconomicTransaction.bind(this),
            
            // Settings Control
            getSetting: (settingName) => this.neuralMemory.settingsIndex[settingName],
            updateSetting: this.updateSetting.bind(this),
            
            // System Information
            getSystemStatus: this.generateSystemStatus.bind(this),
            getNeuralMemory: () => this.neuralMemory,
            getGameState: () => this.gameState,
            
            // World Objects
            getWorldObjects: () => this.neuralMemory.worldObjects,
            interactWithObject: this.interactWithWorldObject.bind(this)
        };
    }

    updateSetting(settingName, value) {
        if (this.neuralMemory.settingsIndex[settingName]) {
            this.neuralMemory.settingsIndex[settingName].currentValue = value;
            
            // Apply setting changes
            this.applySettingChange(settingName, value);
            
            // Log setting change
            this.logSystemEvent('SETTING_UPDATED', {
                setting: settingName,
                value: value,
                user: this.gameState.currentUser?.username,
                timestamp: new Date().toISOString()
            });
            
            return true;
        }
        return false;
    }

    applySettingChange(settingName, value) {
        // Apply setting changes to appropriate systems
        if (settingName.includes('nature_')) {
            this.applyNatureSetting(settingName, value);
        } else if (settingName.includes('physics_')) {
            this.applyPhysicsSetting(settingName, value);
        } else if (settingName.includes('admin_')) {
            this.applyAdminSetting(settingName, value);
        } else if (settingName.includes('shop_')) {
            this.applyShopSetting(settingName, value);
        } else if (settingName.includes('visual_')) {
            this.applyVisualSetting(settingName, value);
        }
    }

    applyNatureSetting(settingName, value) {
        if (settingName.includes('crow_rental')) {
            this.gameState.economicSettings.crowRentalRate = value;
        } else if (settingName.includes('tree_oxygen')) {
            this.gameState.economicSettings.treeOxygenTax = value;
        } else if (settingName.includes('leaf_growth')) {
            this.gameState.natureSettings.leafGrowthSpeed = value;
        }
    }

    applyPhysicsSetting(settingName, value) {
        if (settingName.includes('sky_rotation')) {
            this.gameState.physicsSettings.skyRotationSpeed = value;
        } else if (settingName.includes('gravity')) {
            this.gameState.physicsSettings.gravityStrength = value;
        }
    }

    applyAdminSetting(settingName, value) {
        if (settingName.includes('ghost_access')) {
            this.gameState.adminSettings.ghostAccessEnabled = value;
        } else if (settingName.includes('asset_freeze')) {
            this.gameState.adminSettings.globalAssetFreeze = value;
        }
    }

    applyShopSetting(settingName, value) {
        if (settingName.includes('instant_delivery')) {
            Object.values(this.neuralMemory.worldObjects).forEach(obj => {
                if (obj.type === 'shop') {
                    obj.instantDelivery = value;
                }
            });
        } else if (settingName.includes('shop_visibility')) {
            Object.values(this.neuralMemory.worldObjects).forEach(obj => {
                if (obj.type === 'shop') {
                    obj.visibility = value;
                }
            });
        }
    }

    applyVisualSetting(settingName, value) {
        if (settingName.includes('primary_color')) {
            document.documentElement.style.setProperty('--color-primary', value);
        } else if (settingName.includes('logo_opacity')) {
            document.querySelector('.sovereign-watermark').style.opacity = value / 100;
        }
    }

    interactWithWorldObject(objectId, action) {
        const object = this.neuralMemory.worldObjects[objectId];
        
        if (!object) {
            throw new Error('World object not found');
        }
        
        if (!this.gameState.currentUser) {
            throw new Error('User must be authenticated to interact with world objects');
        }
        
        switch (action) {
            case 'rent':
                if (object.currentTenant || object.currentRenter) {
                    throw new Error('Object already rented');
                }
                
                if (object.type === 'tree') {
                    object.currentTenant = this.gameState.currentUser.username;
                    return this.processEconomicTransaction('tree_rental', 1, objectId);
                } else if (object.type === 'crow') {
                    object.currentRenter = this.gameState.currentUser.username;
                    return this.processEconomicTransaction('crow_rental', 1, objectId);
                }
                break;
                
            case 'purchase':
                if (object.type === 'shop') {
                    object.owner = this.gameState.currentUser.username;
                    return this.processEconomicTransaction('shop_purchase', 1, objectId);
                }
                break;
                
            case 'info':
                return {
                    object: object,
                    availableActions: this.getAvailableActions(object.type)
                };
        }
        
        throw new Error('Invalid action for object type');
    }

    getAvailableActions(objectType) {
        switch (objectType) {
            case 'tree':
                return ['rent', 'info', 'collect_oxygen'];
            case 'crow':
                return ['rent', 'info', 'send_message'];
            case 'shop':
                return ['purchase', 'info', 'upgrade'];
            default:
                return ['info'];
        }
    }
}

// Initialize and export AI Master
window.GAMI_AI_MASTER = new AIMaster();
function executeOverride() {
    let target = document.querySelector('input[placeholder="dfgh"]').value; 
    if(target) {
        alert("Sovereign Malik, " + target + " ka empire ab aapke kabze mein hai!");
        // Yahan game ka main dashboard khul jayega
        window.location.href = "#game-canvas"; 
    }
}
