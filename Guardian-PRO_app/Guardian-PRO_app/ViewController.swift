//
//  ViewController.swift
//  Guardian-PRO_app
//
//  Created by Lok Hong Kwan on 22/4/2019.
//  Copyright © 2019 Lok Hong Kwan. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet weak var unlock_icon: UIImageView!
    @IBOutlet weak var lock_label: UILabel!
    
    func lock() {
        let image = UIImage(named: "lock-icon")
        self.unlock_icon.image = image
    }
    func unlock() {
        let image = UIImage(named: "unlock-icon")
        self.unlock_icon.image = image
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    @IBAction func onClick(_ lock_Button: UIButton, forEvent event: UIEvent){
        
        // Get current label text.
        
        let currLabelText = lock_label.text
        
        // Set new label text according to current text.
        
        if(currLabelText == "LOCK")
        {
            lock_label.text = "UNLOCK";
            lock()
        }else
        {
            lock_label.text = "LOCK";
            unlock()
        }
        
        // Make label size fit new text.
        lock_label.sizeToFit();
    }
    
    override var preferredStatusBarStyle: UIStatusBarStyle {
        return .lightContent
    }
}
